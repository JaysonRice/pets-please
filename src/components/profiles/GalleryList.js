import React, { useContext, useEffect, useState } from "react"
import "./ProfilePage.css"
import { PetPicContext } from "../profiles/PetPictureProvider"
import GalleryPet from "./GalleryPet"
import { FilterByName } from "./FilterPets"
import { Button } from "reactstrap"
import { UserContext } from "./UserProvider"

export default ({ petName, setPetName, setActiveView }) => {

    const { petPics } = useContext(PetPicContext)
    const { users } = useContext(UserContext)
    const [renderedPetPics, setRenderedPetPics] = useState([])


    const [loggeduser, setLoggedUser] = useState([])
    const currentUserId = localStorage.getItem('pets_please_user')

    useEffect(
        () => {
            const currentlyLoggedUser = users.find(user => user.id === parseInt(currentUserId)) || {}
            setLoggedUser(currentlyLoggedUser)
        },
        [users]
    )

    useEffect(
        () => {
            const currentUserId = localStorage.getItem('pets_please_user')

            const filteredUserPics = petPics.filter(userPic => userPic.pet.userId === parseInt(currentUserId)).sort((Beginning, End) => {
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

            if (petName === "0") {
                filteredPets = filteredUserPics

            } else if (petName !== "0") {
                filteredPets = filteredUserPics.filter(userPic => userPic.pet.id === parseInt(petName))
            }


            setRenderedPetPics(filteredPets)

        },
        [petName, petPics]
    )

    return (
        <>
        <header className="galleryHeader">
            
            <h3>{loggeduser.username}'s Gallery</h3>
            <Button outline color="primary" onClick={() => setActiveView("dashboard")}size="sm">Back to Dashboard</Button>
            </header>
            <FilterByName setPetName={setPetName} />
            <div className="galleryPicContainer">
                {
                    renderedPetPics.map(pic => {

                        return <GalleryPet key={pic.id} petpic={pic} />
                    })
                }
            </div>
        </>
    )
}