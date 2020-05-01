import React, { useState, useEffect } from "react"
import "./Layout.css"
import "./PetsPlease.css"
import MyPetList from "./myPets/MyPetList"
import { PetProvider } from "./petFeed/PetProvider"

export default () => (
    <>
        <section className="MainContainer">
            <div className="MyPetsContainer">
                <PetProvider>
                    <MyPetList />
                </PetProvider>
            </div>
            <div className="MainFeedContainer">
                <h1>pet feed</h1>
            </div>
            <div className="FollowersContainer">
                <h1>followers</h1>
            </div>
        </section>
    </>
)