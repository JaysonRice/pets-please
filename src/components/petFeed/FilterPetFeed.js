import React, { useContext, useRef } from 'react'
import { PetTypeContext } from "./PetTypeProvider"
import { PetPicContext } from '../profiles/PetPictureProvider'

export const FilterByType = (setTerms) => {

    const { petTypes } = useContext(PetTypeContext)
    const petType = useRef()
    const { setFilterTerm } = useContext(PetPicContext)

    return (
        <div className="filterPetTypes">
            <label htmlFor="petTypes">Filter By Type: </label>
            <select defaultValue=""
                name="petType"
                ref={petType}
                id="petType"
                onChange={e => setFilterTerm(parseInt(e.current.value))}
                className="form-control">
                <option value="0">All Pets</option>
                {petTypes.map(e => (
                    <option key={e.id} value={e.id}>
                        {e.name}
                    </option>
                ))}
            </select>
        </div>
    )
}