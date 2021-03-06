import React, { useContext, useState } from "react"
import { PetContext } from "../petFeed/PetProvider"
import { Button } from 'reactstrap';

export const EditPetForm = ({ pet, toggleEdit }) => {
    const { editPet } = useContext(PetContext)
    const { deletePet } = useContext(PetContext) 
    // Separate state variable to track the Pet as it is edited
    const [updatedPet, setPet] = useState(pet)

    const handleControlledInputChange = (event) => {
        // Create a new copy of the animal being edited
        const newPet = Object.assign({}, updatedPet)

        // Change the property value on the copy
        newPet[event.target.name] = event.target.value

        // Set the copy as the new state
        setPet(newPet)
    }

    const updatePet = () => {
        
            editPet({
                id: updatedPet.id,
                name: updatedPet.name,
                pettypeId: parseInt(updatedPet.pettypeId),
                userId: parseInt(localStorage.getItem("pets_please_user"))
            })
                .then(toggleEdit)
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

            <div className="editPetButtonContainer">
            <Button className="editPetButton" outline color="primary" type="submit" 
                onClick={evt => {
                    evt.preventDefault()
                    updatePet()
                }}>
                Save Updates
            </Button>
            <Button className="editPetButton" outline color="danger" onClick={() => {
                        deletePet(pet.id).then(toggleEdit)
                    }}>Delete Pet</Button>
                    </div>
        </form>
    )
}