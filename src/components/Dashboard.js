import React, { useState, useEffect } from "react"
import "./Layout.css"
import "./PetsPlease.css"
import MyPetList from "./myPets/MyPetList"
import { PetProvider } from "./petFeed/PetProvider"
import { PetTypeProvider } from "./petFeed/PetTypeProvider"
import { PetPicProvider } from "./profiles/PetPictureProvider"
import MainFeedPetList from "./petFeed/MainFeedPetList"
import { UserProvider } from "./profiles/UserProvider"

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
                <PetProvider>
                    <PetPicProvider>
                        <UserProvider>
                            <MainFeedPetList />
                        </UserProvider>
                    </PetPicProvider>
                </PetProvider>

            </div>
            <div className="followersContainer">
                <h1>followers</h1>
            </div>

        </section>
    </>
)