import React, { useState, useEffect } from "react"
import "./Layout.css"
import "./PetsPlease.css"
import MyPetList from "./myPets/MyPetList"
import { PetProvider } from "./petFeed/PetProvider"
import { PetTypeProvider } from "./petFeed/PetTypeProvider"

export default () => (
    <>
        <section className="mainContainer">
            <div className="myPetsContainer">
                <PetProvider>
                    <PetTypeProvider>
                        <MyPetList />
                    </PetTypeProvider>
                </PetProvider>
            </div>
            <div className="mainFeedContainer">
                <h1>pet feed</h1>
            </div>
            <div className="followersContainer">
                <h1>followers</h1>
            </div>
        </section>
    </>
)