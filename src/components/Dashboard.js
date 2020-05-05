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

            <div className="myPetsContainer">
                <UserProvider>
                    <PetProvider>
                        <PetTypeProvider>
                            <MyPetList />
                        </PetTypeProvider>
                    </PetProvider>
                </UserProvider>
            </div>

            <div className="mainFeedContainer">
                <PetPicProvider>
                    <PetProvider>
                        <UserProvider>
                            <PetTypeProvider>
                                <FilterByType />
                                <MainFeedPetList />
                            </PetTypeProvider>
                        </UserProvider>
                    </PetProvider>
                </PetPicProvider>

            </div>
            <div className="followersContainer">
                <h1>followers</h1>
            </div>

        </section>
    </>
)