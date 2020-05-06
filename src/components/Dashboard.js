import React from "react"
import "./Layout.css"
import "./PetsPlease.css"
import MyPetList from "./myPets/MyPetList"
import FollowerList from "./followes/FollowerList"
import { PetProvider } from "./petFeed/PetProvider"
import { PetTypeProvider } from "./petFeed/PetTypeProvider"
import { PetPicProvider } from "./profiles/PetPictureProvider"
import { UserProvider } from "./profiles/UserProvider"
import { FollowerProvider } from "./followes/FollowerProvider"


export default () => (
    <>
    <FollowerProvider>
        <section className="mainContainer">
            <PetProvider>

                <PetPicProvider>
                    <PetTypeProvider>
                        <UserProvider>
                            <div className="myPetsContainer">
                                <MyPetList />
                            </div>
                            <div className="mainFeedContainer">

                            </div>
                            <div className="followersContainer">
                                
                                    <FollowerList />
                                
                            </div>
                        </UserProvider>
                    </PetTypeProvider>
                </PetPicProvider>

            </PetProvider>

        </section>
        </FollowerProvider>
    </>
)