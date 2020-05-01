import React, { useContext, useState } from "react"
import MyPet from "./MyPet"
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap"
import AddPetForm from "./AddPetForm"
import { PetContext } from "../petFeed/PetProvider"
import { UserContext } from "../profiles/UserProvider"

export default () => {

    const { pets } = useContext(PetContext)
    const [modal, setModal] = useState(false)
    const toggle = () => setModal(!modal)


    const currentUserId = localStorage.getItem('pets_please_user')
    const filteredUserPets = pets.filter(userPet => userPet.userId === parseInt(currentUserId));

    return (
        <>
            <h2>My Pets</h2>

            <ul className="pets">
                {
                    filteredUserPets.map(pet => {
                        
                        return <MyPet key={pet.id} pet={pet} />
                    })
                }
            </ul>

            <Button onClick={toggle}>New Pet</Button>

            {/* <Modal isOpen={modal} toggle={toggle}>
                <ModalHeader toggle={toggle}>
                    New Pet
                </ModalHeader>
                <ModalBody>
                    <EmployeeForm toggler={toggle} />
                </ModalBody>
            </Modal> */}
        </>
    )
}