import React, { useContext, useState } from "react"
import { PetContext } from "../petFeed/PetProvider"
import { PetTypeContext } from "../petFeed/PetTypeProvider"
import { Button } from 'reactstrap';

export const EditPetForm = ({ pet, user, toggleEdit }) => {
    const { petTypes } = useContext(PetTypeContext)
    const { editPet } = useContext(PetContext)
    const { deletePet } = useContext(PetContext) 
    // Separate state variable to track the Pet as it is edited
    const [updatedPet, setPet] = useState(pet)

    /*
        When changing a state object or array, always create a new one
        and change state instead of modifying current one
    */
    const handleControlledInputChange = (event) => {
        // Create a new copy of the animal being edited
        const newPet = Object.assign({}, updatedPet)

        // Change the property value on the copy
        newPet[event.target.name] = event.target.value

        // Set the copy as the new state
        setPet(newPet)
    }

    const updatePet = () => {
        const petTypeId = parseInt(updatedPet.petTypeId)
        
        if (petTypeId === 0) {
            window.alert("Please select a pet type")
        } else {
            editPet({
                id: updatedPet.id,
                name: updatedPet.name,
                pettypeId: updatedPet.petTypeId,
                userId: parseInt(localStorage.getItem("pets_please_user"))
            })
                .then(toggleEdit)
        }
    }

    return (
        <form className="petForm">
            <fieldset>
                <div className="form-group">
                    <label htmlFor="name">Pet name: </label>
                    <input type="text" name="name" required autoFocus className="form-control"
                        placeholder="Pet name"
                        defaultValue={pet.name}
                        onChange={handleControlledInputChange}
                    />
                </div>
            </fieldset>

            <fieldset>
                <div className="form-group">
                    <label htmlFor="petTypeId">Pet Type: </label>
                    <select name="petTypeId" className="form-control"
                        defaultValue={pet.pettypeId}
                        onChange={handleControlledInputChange}>

                        <option value="0">Select a pet type</option>
                        {petTypes.map(e => (
                            <option key={e.id} value={e.id}>
                                {e.name}
                            </option>
                        ))}
                    </select>
                </div>
            </fieldset>

            <div className="editPetButtonContainer">
            <Button className="editPetButton" outline color="primary" type="submit" 
                onClick={evt => {
                    evt.preventDefault()
                    updatePet()
                }}>
                Save Updates
            </Button>
            <Button className="editPetButton" outline color="danger" onClick={() => {
                        deletePet(pet.id)
                        toggleEdit()
                    }}>Delete Pet</Button>
                    </div>
        </form>
    )
}