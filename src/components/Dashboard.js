import React, { useState, useEffect, useContext } from "react"
import "./Layout.css"
import "./PetsPlease.css"
import MainFeedPetList from "./petFeed/MainFeedPetList"
import GalleryList from "./profiles/GalleryList"
import MyPetList from "./myPets/MyPetList"
import FollowerList from "./followes/FollowerList"
import { PetProvider } from "./petFeed/PetProvider"
import { PetTypeProvider } from "./petFeed/PetTypeProvider"
import { PetPicProvider, PetPicContext } from "./profiles/PetPictureProvider"
import { UserProvider } from "./profiles/UserProvider"
import { FollowerProvider } from "./followes/FollowerProvider"
import { SearchBar } from "./followes/UserSearch"
import { SearchResults } from "./followes/SearchResults"

export default ({setActiveUser}) => {
    const [searchTerms, setTerms] = useState(null)

    const [activeView, setActiveView] = useState("dashboard")
    const [components, setComponents] = useState()

    const [petType, setPetType] = useState("0")
    const [petName, setPetName] = useState("0")

    const showDashboard = () => (
        <div className="mainDashboardContainer">
            <div className="myPetsContainer box">
                <MyPetList setActiveView={setActiveView} />
            </div>
            <div className="mainFeedContainer box">
                <MainFeedPetList setActiveUser={setActiveUser} petType={petType} setPetType={setPetType}/>
            </div>
            <div className="followersContainer box">
                <SearchBar setTerms={setTerms} />
                <SearchResults searchTerms={searchTerms} setTerms={setTerms} />
                <FollowerList />
            </div>
        </div>
    )

    const showGallery = () => (
        <div className="mainGalleryContainer">
            <GalleryList setActiveView={setActiveView} petName={petName} setPetName={setPetName}  />
        </div>
    )

    useEffect(() => {
        if (activeView === "dashboard") {
            setComponents(showDashboard)
        }
        else if (activeView === "gallery") {
            setComponents(showGallery)
        }
    }, [activeView, petType, petName, searchTerms])

    return (
        <FollowerProvider>
            <PetProvider>
                <PetPicProvider>
                    <PetTypeProvider>
                        <UserProvider>
                            <div className="mainContainer">
                                {components}
                            </div>
                        </UserProvider>
                    </PetTypeProvider>
                </PetPicProvider>
            </PetProvider>
        </FollowerProvider>
    )

}