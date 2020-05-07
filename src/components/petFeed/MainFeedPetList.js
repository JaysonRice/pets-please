import React, { useContext, useEffect, useState } from "react"
import MainFeedPet from "./MainFeedPet"
import "./MainFeedPetList.css"
import { PetPicContext } from "../profiles/PetPictureProvider"
import { UserContext } from "../profiles/UserProvider"

export default () => {

    const { petPics } = useContext(PetPicContext)
    const { users } = useContext(UserContext)

    //     const [currentlyLoggedUser, setCurrentlyLoggedUser] = useState({
    //     id: 0,
    //     name: "defaultUser",
    //     email: "ja@ja.com",
    //     username: "Jayboi",
    //     password: 123,
    //     followers:[]
    // })

    // const [currentFollowers, setCurrentFollowers] = useState([])

    // useEffect(() => {


    // let followerIds = []

    // currentFollowers.forEach(follower => {
    //     followerIds.push(follower.followingId)
    // })



    // },
    // [currentFollowers])




    // // Show only the user's pets in the pet feed
    const currentUserId = localStorage.getItem('pets_please_user')
    const filteredUserPics = petPics.filter(userPic => userPic.pet.userId === parseInt(currentUserId));

    const currentUserInfo = users.find(user => user.id === parseInt(currentUserId)) || {}
debugger
    // Get follower Ids
    // const followers = currentUserInfo.followers
    // Get everyone you follow as an object
    // const everyoneYouFollow = followers.filter(follower => follower.followingId === users.id)
    // Filter all pictures by userId that you follow
    // const filteredFollowingPics = petPics.filter(userPic => userPic.pet.userId === everyoneYouFollow.id)

    // const [renderedPetPics, setRenderedPetPics] = useState([])
    


    // 1. Get iterate followers and get pets for each one
    // 2. For each pet, iterate array of pets, get pic ID, find
    // 3. State variable for all pictures in big array to be rendered 

    // useEffect (() => {

    // const currentUserInfo = users.find(user => user.id === parseInt(currentUserId))
    // setCurrentlyLoggedUser(currentUserInfo)

    // },[users])

    // useEffect (() => {
    // if (currentlyLoggedUser !== undefined){
    //     setCurrentFollowers(currentlyLoggedUser.followers)
    // } else {
    //     console.log("else")
    // }

    // },[currentlyLoggedUser])

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