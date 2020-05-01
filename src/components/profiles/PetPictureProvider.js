import React, { useState, useEffect } from "react"

export const PetPicContext = React.createContext()

export const PetPicProvider = (props) => {

    const [petPics, setPetPics] = useState([])

    const getPetPics = () => {
        return fetch("http://localhost:8088/petpics")
            .then(res => res.json())
            .then(setPetPics)
    }

    const addPetPic = petPic => {
        return fetch("http://localhost:8088/petpics", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(petPic)
        })
            .then(getPetPics)
    }

    const deletePetPic = petPicId => {
        return fetch(`http://localhost:8088/petpics/${petPicId}`, {
            method: "DELETE"
        })
            .then(getPetPics)
    }

    useEffect(() => {
        getPetPics()
    }, [])

    return (
        <PetPicContext.Provider value={
            {
                petPics,
                addPetPic,
                deletePetPic,
            }
        }>
            {props.children}
        </PetPicContext.Provider>
    )
}