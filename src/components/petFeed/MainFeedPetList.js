import React, { useContext } from "react"
import MainFeedPet from "./MainFeedPet"
import "./MainFeedPetList.css"
import { PetPicContext } from "../profiles/PetPictureProvider"
import { UserContext } from "../profiles/UserProvider"

export default () => {

    const { petPics } = useContext(PetPicContext)
    const { users } = useContext(UserContext)

    const currentUserId = localStorage.getItem('pets_please_user')
    const filteredUserPics = petPics.filter(userPic => userPic.pet.userId === parseInt(currentUserId));

    return (
        <>
            <h2>PetPics</h2>
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
