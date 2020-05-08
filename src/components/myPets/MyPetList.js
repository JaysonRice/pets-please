import React, { useContext, useState, useEffect } from "react"
import MyPet from "./MyPet"
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap"
import AddPetForm from "./AddPetForm"
import { PetContext } from "../petFeed/PetProvider"
import { UserContext } from "../profiles/UserProvider"

export default () => {

    const { pets } = useContext(PetContext)
    const { users } = useContext(UserContext)

    const [modal, setModal] = useState(false)
    const toggle = () => setModal(!modal)

    const [loggeduser, setLoggedUser] = useState([])
    const currentUserId = localStorage.getItem('pets_please_user')

    useEffect(
        () => {
            const currentlyLoggedUser = users.find(user => user.id === parseInt(currentUserId)) || {}
            setLoggedUser(currentlyLoggedUser)
        },
        [users, pets]
    )
    const filteredUserPets = pets.filter(userPet => userPet.userId === parseInt(currentUserId));

    
    return (
        <>
            <div className="logoContainer">

                <img src="https://res.cloudinary.com/dawhgtkqk/image/upload/c_scale,w_300/v1588278178/RedCropped_xxl9bv.png" alt="" />
                
            </div>

            <Button block outline color="danger">Gallery</Button>
            <h3 className="myPetsUsername"> {loggeduser.username}'s Pets</h3>

            <div className="pets">
                {
                    filteredUserPets.map(pet => {

                        return <MyPet key={pet.id} pet={pet} />
                    })
                }
            </div>

            <Button color="primary" onClick={toggle}>Add Pet</Button>

            <Modal isOpen={modal} toggle={toggle}>
                <ModalHeader toggle={toggle}>
                    New Pet
                </ModalHeader>
                <ModalBody>
                    <AddPetForm toggler={toggle} />
                </ModalBody>
            </Modal>
        </>
    )
}