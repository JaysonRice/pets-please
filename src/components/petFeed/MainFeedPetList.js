import React, { useContext, useEffect, useState } from "react"
import MainFeedPet from "./MainFeedPet"
import "./MainFeedPetList.css"
import { PetPicContext } from "../profiles/PetPictureProvider"
import { UserContext } from "../profiles/UserProvider"
import { FollowerContext } from "../followes/FollowerProvider"
import { PetContext } from "./PetProvider"
import { FilterByType } from "./FilterPetFeed"
import { Button } from "reactstrap"

export default ({ petType, setPetType, setActiveUser }) => {

    const { petPics } = useContext(PetPicContext)
    const { usersFollowed } = useContext(FollowerContext)
    const { pets } = useContext(PetContext)
    const { users } = useContext(UserContext)
    
    const [allPetPics, setAllPetPics] = useState(petPics)

    const [renderedPetPics, setRenderedPetPics] = useState([])

    useEffect(
        () => {
            const currentUserId = localStorage.getItem('pets_please_user')

            const filteredFollowed = usersFollowed.filter(followedUser => followedUser.userId === parseInt(currentUserId));

            // Everybody you follow as an object
            const everyoneYouFollow = filteredFollowed.map(follower => {
                return users.find(user => user.id === follower.followedUserId)
            })

            // Everybody you follow's pets as objects

            let friendPets = []

            everyoneYouFollow.map(singleFriend => {
                singleFriend.pets.forEach(pet => {
                    friendPets.push(pet)
                });
            })

            // Everybody you follow's pet pictures as objects

            let friendPetPics = []

            friendPets.forEach(singlePet => {

                const foundPics = petPics.filter(singlePic =>
                    singlePic.petId === singlePet.id
                )
                friendPetPics = [...friendPetPics, ...foundPics]
            })

            const filteredUserPics = petPics.filter(userPic => userPic.pet.userId === parseInt(currentUserId));
            // Combine user pictures and pictures from users you follow
            let allPetPictures = [...friendPetPics, ...filteredUserPics].sort((Beginning, End) => {
                let dateA = Beginning.timestamp
                let dateB = End.timestamp
                if (dateA < dateB) {
                    return 1
                }
                if (dateA > dateB) {
                    return -1
                }
                return 0
            }
            )

            // State logic for rendering photos after using the filter
            let filteredPets = []

            if (petType === "0") {
                filteredPets = allPetPictures

            } else if (petType !== "0") {

                filteredPets = allPetPictures.filter(userPic => userPic.pet.pettypeId === parseInt(petType))
            }

            setRenderedPetPics(filteredPets)

        },
        [petType, pets, petPics, users, usersFollowed]
    )

    // Map over array of just your pics and pics of users you follow
    return (
        <>
            <div className="mainFeedFilterContainer">
                <FilterByType setPetType={setPetType} />

                <div className="mainFeedTopItem">

                    <Button outline color="primary" onClick={() => {
                        setActiveUser(null)
                        localStorage.setItem("pets_please_user", "")
                    }}
                        size="sm">Logout</Button>
                </div>
            </div>

            <div className="mainDashboardContainer">
                <div className="petPics">
                    {
                        renderedPetPics.map(pic => {

                            const use = users.find(u => u.id === pic.pet.userId)

                            return <MainFeedPet key={pic.id} user={use} petpic={pic} />
                        })
                    }
                </div>
            </div>
        </>
    )
}