import React, { useContext, useState } from "react"
import MyPet from "./MyPet"
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap"
import AddPetForm from "./AddPetForm"
import { PetContext } from "../petFeed/PetProvider"
export default () => {

    const { pets } = useContext(PetContext)
    const [modal, setModal] = useState(false)
    const toggle = () => setModal(!modal)

    const currentUserId = localStorage.getItem('pets_please_user')
    const filteredUserPets = pets.filter(userPet => userPet.userId === parseInt(currentUserId));

    return (
        <>
            <div className="logoContainer">
                <img src="https://res.cloudinary.com/dawhgtkqk/image/upload/c_scale,w_200/v1588278178/RedCropped_xxl9bv.png" alt="" />
                <Button>Logout</Button>
            </div>

            <h2>My Pets</h2>

            <div className="pets">
                {
                    filteredUserPets.map(pet => {

                        return <MyPet key={pet.id} pet={pet} />
                    })
                }
            </div>

            <Button onClick={toggle}>Add Pet</Button>

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