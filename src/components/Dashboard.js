import React, { useState, useEffect } from "react"
import "./Layout.css"
import "./PetsPlease.css"
import MainFeedPetList from "./petFeed/MainFeedPetList"
import GalleryList from "./profiles/GalleryList"
import MyPetList from "./myPets/MyPetList"
import FollowerList from "./followes/FollowerList"
import { PetProvider } from "./petFeed/PetProvider"
import { PetTypeProvider } from "./petFeed/PetTypeProvider"
import { PetPicProvider } from "./profiles/PetPictureProvider"
import { UserProvider } from "./profiles/UserProvider"
import { FilterByType } from "./petFeed/FilterPetFeed"
import { FilterByName } from "./profiles/FilterPets"
import { FollowerProvider } from "./followes/FollowerProvider"
import { SearchBar } from "./followes/UserSearch"
import { SearchResults } from "./followes/SearchResults"

export default () => {
    const [searchTerms, setTerms] = useState(null)

    const [activeView, setActiveView] = useState("dashboard")
    const [components, setComponents] = useState()
    
    const [petType, setPetType] = useState("0")
    const [petName, setPetName] = useState("0")

    const showDashboard = () => (
        <FollowerProvider>
            <PetProvider>
                <PetPicProvider>
                    <PetTypeProvider>
                        <UserProvider>
                            <div className="myPetsContainer box">
                                <MyPetList setActiveView={setActiveView} />
                            </div>
                            <div className="mainFeedContainer box">
                                <FilterByType setPetType={setPetType} />
                                <MainFeedPetList petType={petType} />
                            </div>
                            <div className="followersContainer box">
                                <SearchBar setTerms={setTerms} />
                                <SearchResults searchTerms={searchTerms} setTerms={setTerms} />
                                <FollowerList />
                            </div>
                        </UserProvider>
                    </PetTypeProvider>
                </PetPicProvider>
            </PetProvider>
        </FollowerProvider>
    )


    const showGallery = () => (
        <div>
            <PetProvider>
                <PetPicProvider>
                    <PetTypeProvider>
                        <UserProvider>
                            <div className="fakeLink href" onClick={() => setActiveView("dashboard")}>Dashboard</div>
                            <FilterByName setPetName={setPetName} />
                            <GalleryList petName={petName} activeView={activeView}/>
                        </UserProvider>
                    </PetTypeProvider>
                </PetPicProvider>
            </PetProvider>
        </div>
    )

    useEffect(() => {
        if (activeView === "dashboard") {
            setComponents(showDashboard)
        }
        else if (activeView === "gallery") {
            setComponents(showGallery)
        }
    }, [activeView])

    return (
        <section className="mainContainer">
            {components}
        </section>
    )

}