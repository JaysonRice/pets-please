import React from "react"
import {
    Card, CardImg, CardBody, CardSubtitle
} from 'reactstrap';
import "./MainFeedPetList.css"

export default ({ petpic, user, pet }) => {
   
    return (
        <>
        <div className="petCard">
            <Card style={{ width: '100%', }}>
                <CardImg top width="100%" src={petpic.url} alt="Card image cap" />
                <CardBody>
                    <h4>{pet.name}</h4>
                    <CardSubtitle className="postedBy">Posted By: {user.username} on {new Date (petpic.timestamp).toLocaleDateString()}</CardSubtitle>

                </CardBody>
            </Card>
        </div>
        </>
    );
};