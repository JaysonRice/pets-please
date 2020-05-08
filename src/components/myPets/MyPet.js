import React, { useState } from "react"
import {
    Card, CardBody,
     CardSubtitle, Button, Modal, 
    ModalHeader, ModalBody 
} from 'reactstrap';
import "./MyPet.css"
import { EditPetForm } from "./EditPetForm";
import CloudinaryUpload from "./AddPetUpload";

export default ({ pet }) => {   
// Toggle adding picture modal
const [picModal, setPicModal] = useState(false)
const toggleAdd = () => setPicModal(!picModal)

// Toggle edit modal
const [editModal, setEditModal] = useState(false)
const toggleEdit = () => setEditModal(!editModal)

    return (
        <>
        <div className="petCard">
            <Card style={{ width: '15rem', }}>
                <CardBody className="petCardBody">
                    <div className="petCardMain">
                    <h4>{pet.name}</h4>
                    <Button onClick={toggleEdit} outline color="primary">Edit</Button>
                    <Button onClick={toggleAdd} outline color="primary">+</Button>
                    </div>
                    <CardSubtitle>{pet.pettype.name}</CardSubtitle>
                    
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

        <Modal isOpen={picModal} toggle={toggleAdd}>
            <ModalHeader toggle={toggleAdd}>
                Upload Picture of {pet.name}
            </ModalHeader>
            <ModalBody>
                <CloudinaryUpload key={pet.id} toggleAdd={toggleAdd} pet={pet} {...pet} />

            </ModalBody>
        </Modal>
        </>
    );
};