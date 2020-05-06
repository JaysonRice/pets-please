import React, { useState } from "react"
import "./Layout.css"
import "./PetsPlease.css"
import MyPetList from "./myPets/MyPetList"
import FollowerList from "./followes/FollowerList"
import { PetProvider } from "./petFeed/PetProvider"
import { PetTypeProvider } from "./petFeed/PetTypeProvider"
import { PetPicProvider } from "./profiles/PetPictureProvider"
import { UserProvider } from "./profiles/UserProvider"
import { FollowerProvider } from "./followes/FollowerProvider"
import { SearchBar } from "./followes/UserSearch"
import { SearchResults } from "./followes/SearchResults"

export default () => {
    const [searchTerms, setTerms] = useState(null)

    return (
        <section className="mainContainer">
            <FollowerProvider>
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
                                    <SearchBar setTerms={setTerms} />
                                    <SearchResults searchTerms={searchTerms} />
                                    <FollowerList />

                                </div>
                            </UserProvider>
                        </PetTypeProvider>
                    </PetPicProvider>
                </PetProvider>
            </FollowerProvider>
        </section>
    )

}