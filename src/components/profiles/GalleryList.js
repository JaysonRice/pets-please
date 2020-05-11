import React, { useContext, useEffect, useState } from "react"
import "./ProfilePage.css"
import { PetPicContext } from "../profiles/PetPictureProvider"
import { UserContext } from "../profiles/UserProvider"
import { PetContext } from "../petFeed/PetProvider"
import GalleryPet from "./GalleryPet"
import { FilterByName } from "./FilterPets"

export default ({ petName, setPetName }) => {
    
    const { petPics } = useContext(PetPicContext)
    const { pets } = useContext(PetContext)
    const [renderedPetPics, setRenderedPetPics] = useState([])

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
            <FilterByName setPetName={setPetName}/>
            <div className="galleryPics">
                {
                    renderedPetPics.map(pic => {

                        return <GalleryPet key={pic.id} petpic={pic} />
                    })
                }
            </div>
        </>
    )
}