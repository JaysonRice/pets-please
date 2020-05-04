import React, { useState, useContext, useEffect } from "react"
import {
    Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button, Modal, 
    ModalHeader, ModalBody, ModalFooter 
} from 'reactstrap';
import "./MyPet.css"
import { EditPetForm } from "./EditPetForm";
import { PetContext } from "../petFeed/PetProvider";

export default ({ pet }) => {

const { deletePet } = useContext(PetContext)    
// Toggle details modal
const [modal, setModal] = useState(false)
const toggle = () => setModal(!modal)

// Toggle edit modal
const [editModal, setEditModal] = useState(false)
const toggleEdit = () => setEditModal(!editModal)

    return (
        <>
        <div className="petCard">
            <Card style={{ width: '15rem', }}>
                <CardBody>
                    <h4>{pet.name}</h4>
                    <CardSubtitle>{pet.pettype.name}</CardSubtitle>
                    <Button onClick={toggleEdit} outline color="primary">Edit</Button>
                </CardBody>
            </Card>
        </div>

        <Modal isOpen={editModal} toggle={toggleEdit}>
            <ModalHeader toggle={toggleEdit}>
                {pet.name}
            </ModalHeader>
            <ModalBody>
                <EditPetForm key={pet.id} toggleEdit={toggleEdit} pet={pet} {...pet} />
                <Button outline color="danger" onClick={() => {
                        deletePet(pet.id)
                        toggleEdit()
                    }}>Delete Pet</Button>
            </ModalBody>
        </Modal>
        </>
    );
};