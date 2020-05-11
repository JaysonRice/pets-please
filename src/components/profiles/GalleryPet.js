import React, { useContext } from "react"
import {
    Card, CardImg, CardBody, CardSubtitle, Button
} from 'reactstrap';
import "./ProfilePage.css"
import { PetPicContext } from "./PetPictureProvider"

export default ({ petpic }) => {
    const { deletePetPic } = useContext(PetPicContext) 

    return (
        <>
        <div className="galleryPetCard">
            <Card style={{ width: '50%', }}>
                <CardImg top width="100%" src={petpic.url} alt="Card image cap" />
                <CardBody>
                    <h4>{petpic.pet.name}</h4>
                    <CardSubtitle className="postedBy">Posted on {new Date (petpic.timestamp).toLocaleDateString()}</CardSubtitle>
                    <Button className="editPetButton" outline color="danger" onClick={() => {
                        deletePetPic(petpic.id)
                    }}>Delete Picture</Button>
                </CardBody>
            </Card>
        </div>
        </>
    );
};