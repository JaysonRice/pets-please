import React from "react"
import "./Layout.css"
import "./PetsPlease.css"
import MyPetList from "./myPets/MyPetList"
import MainFeedPetList from "./petFeed/MainFeedPetList"
import { PetProvider } from "./petFeed/PetProvider"
import { PetTypeProvider } from "./petFeed/PetTypeProvider"
import { PetPicProvider } from "./profiles/PetPictureProvider"
import { UserProvider } from "./profiles/UserProvider"
import { FilterByType } from "./petFeed/FilterPetFeed"

export default () => (
    <>
        <section className="mainContainer">
            <PetProvider>
                <PetPicProvider>
                    <PetTypeProvider>
                        <UserProvider>
                            <div className="myPetsContainer">
                                <MyPetList />
                            </div>
                            <div className="mainFeedContainer">
                                <MainFeedPetList />
                            </div>
                            <div className="followersContainer">
                                <h1>followers</h1>
                            </div>
                        </UserProvider>
                    </PetTypeProvider>
                </PetPicProvider>
            </PetProvider>

        </section>
    </>
)