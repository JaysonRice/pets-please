import React, { useContext, useEffect, useState } from "react"
import MainFeedPet from "./MainFeedPet"
import "./MainFeedPetList.css"
import { PetPicContext } from "../profiles/PetPictureProvider"
import { UserContext } from "../profiles/UserProvider"

export default () => {
    
    const { petPics } = useContext(PetPicContext)
    const { users } = useContext(UserContext)

    const [currentlyLoggedUser, setCurrentlyLoggedUser] = useState({
    id: 0,
    name: "defaultUser",
    email: "ja@ja.com",
    username: "Jayboi",
    password: 123,
    followers:[]
})

const [currentFollowers, setCurrentFollowers] = useState([])

    useEffect(() => {

        let followerIds = []
    
        currentFollowers.forEach(follower => {
            followerIds.push(follower.followingId)
        })
    
        let userAndFriendPetArray = []
        followerIds.forEach(singleId => {
            const filteredFriendPets =  petPics.filter(userPet => userPet.userId === parseInt(singleId));
            userAndFriendPetArray = userAndFriendPetArray.concat(filteredFriendPets)
            });

    },
    [currentFollowers])

// Show only the user's pets in the pet feed
    const currentUserId = localStorage.getItem('pets_please_user')
    const filteredUserPics = petPics.filter(userPic => userPic.pet.userId === parseInt(currentUserId));
    
useEffect (() => {

    const currentUserInfo = users.find(user => user.id === parseInt(currentUserId))
    setCurrentlyLoggedUser(currentUserInfo)

},[users])

useEffect (() => {
if (currentlyLoggedUser !== undefined){
    setCurrentFollowers(currentlyLoggedUser.followers)
} else {
    console.log("else")
}

},[currentlyLoggedUser])

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