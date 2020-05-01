import React, { useState, useEffect } from "react"
import "./Layout.css"
import "./PetsPlease.css"
import MyPetList from "./myPets/MyPetList"
import { PetProvider } from "./petFeed/PetProvider"

export default () => (
    <>
        <div className="MainContainer">
            <div className="MyPetsContainer">
                <PetProvider>
                    <MyPetList />
                </PetProvider>
            </div>
            <div className="MainFeedContainer">

            </div>
            <div className="FollowersContainer">

            </div>
        </div>
    </>
)