import React, { useContext } from 'react'
import { PetTypeContext } from "./PetTypeProvider"
import { Button } from 'reactstrap'

export const FilterByType = ({ setPetType }) => {

    const { petTypes } = useContext(PetTypeContext)

    return (
        <div className="mainFeedFilterContainer">
            <div className="mainFeedTopItem">
            <label className="selectItself" htmlFor="petTypes"></label>
            <select onChange={e => setPetType(e.target.value)}
                defaultValue=""
                id="petType"
                className="form-control"
                required
            >
                <option value="0">All Pets</option>
                {petTypes.map(e => (
                    <option key={e.id} value={e.id}>
                        {e.name}
                    </option>
                ))}
            </select>
            </div>
            <div className="mainFeedTopItem">
            <Button size="sm">Logout</Button>
            </div>
        </div>
    )
}