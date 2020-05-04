import React from "react"
import {
    Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button
} from 'reactstrap';
import "./MyPet.css"

export default ({ pet }) => {
    return (
        <div className="petCard">
            <Card style={{ width: '15rem', }}>
                <CardBody>
                    <h4>{pet.name}</h4>
                    <CardSubtitle>{pet.pettype.name}</CardSubtitle>
                    <Button color="primary">Edit</Button>
                </CardBody>
            </Card>
        </div>
    );
};