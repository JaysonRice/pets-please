import React, { useState } from "react"
import {
    Card, CardBody,
     CardSubtitle, Button, Modal, 
    ModalHeader, ModalBody 
} from 'reactstrap';
import "./MyPet.css"
import { EditPetForm } from "./EditPetForm";

export default ({ pet }) => {   
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

            </ModalBody>
        </Modal>
        </>
    );
};