import React, { useContext, useEffect, useState } from "react"
import MainFeedPet from "./MainFeedPet"
import "./MainFeedPetList.css"
import { PetPicContext } from "../profiles/PetPictureProvider"
import { UserContext } from "../profiles/UserProvider"

export default ({petTypes}) => {

    const { petPics } = useContext(PetPicContext)
    const { users } = useContext(UserContext)

    const [ filteredPets, setFilteredPets ] = useState([])

    const currentUserId = localStorage.getItem('pets_please_user')
    const filteredUserPics = petPics.filter(userPic => userPic.pet.userId === parseInt(currentUserId));

    useEffect(() => {
        if (petTypes !== 0) {
        const subset = filteredUserPics.filter(p => p.pettypeId === petTypes)
        setFilteredPets(subset)
        } else 
        {setFilteredPets([])}
    }, [petTypes, petPics])

    return (
        <>
            <div className="petPics">
                {
                    filteredUserPics.map(pic => {
                        
                        const use = users.find(u => u.id === pic.pet.userId)
                        
                        return <MainFeedPet key={pic.id} user={use} petpic={pic} />
                    })
                }
            </div>
        </>
    )
}