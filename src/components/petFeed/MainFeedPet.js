import React from "react"
import {
    Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button, Modal, 
    ModalHeader, ModalBody, ModalFooter 
} from 'reactstrap';
import "./MainFeedPetList.css"

export default ({ petpic, user }) => {
  debugger
    return (
        <>
        <div className="petCard">
            <Card style={{ width: '30rem', }}>
                <CardImg top width="100%" src={petpic.url} alt="Card image cap" />
                <CardBody>
                    <h4>{petpic.pet.name}</h4>
                    <CardSubtitle>Posted By: {user.username}</CardSubtitle>
                </CardBody>
            </Card>
        </div>
        </>
    );
};