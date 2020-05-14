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
        [users, currentUserId]
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
        <img src="https://res.cloudinary.com/dawhgtkqk/image/upload/c_scale,w_250/v1589296165/bluecropped_bod0er.png" alt="Pets please logo" />
            <h2>{loggeduser.username}'s Gallery</h2>
            <Button outline color="primary" onClick={() => setActiveView("dashboard")}>Back to Dashboard</Button>
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