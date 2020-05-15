import React, { useContext } from 'react'
import { PetContext } from '../petFeed/PetProvider'

export const FilterByName = ({ setPetName }) => {
    const currentUserId = localStorage.getItem('pets_please_user')

    const { pets } = useContext(PetContext)
    // Make sure to only filter by current users pets
    const filteredUserPets = pets.filter(pet => pet.userId === parseInt(currentUserId))

    return (
        <div className="galleryFilterContainer">
            <label className="selectItself" htmlFor="petNames"></label>
            <select onChange={e => setPetName(e.target.value)}
                defaultValue=""
                id="petName"
                className="form-control"
                required
            >
                <option value="0">All Pets</option>
                {filteredUserPets.map(e => (
                    <option key={e.id} value={e.id}>
                        {e.name}
                    </option>
                ))}
            </select>
            </div>
    )
}