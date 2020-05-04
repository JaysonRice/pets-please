import React, { useState, useEffect } from "react"

export const PetTypeContext = React.createContext()

export const PetTypeProvider = (props) => {

    const [petTypes, setPetTypes] = useState([])

    const getPetTypes = () => {
        return fetch("http://localhost:8088/pettypes")
            .then(res => res.json())
            .then(setPetTypes)
    }

    const addPetType = petType => {
        return fetch("http://localhost:8088/pettypes", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(petType)
        })
            .then(getPetTypes)
    }

    useEffect(() => {
        getPetTypes()
    }, [])

    return (
        <PetTypeContext.Provider value={
            {
                petTypes,
                addPetType
            }
        }>
            {props.children}
        </PetTypeContext.Provider>
    )
}