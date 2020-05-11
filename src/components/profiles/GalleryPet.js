import React from "react"
import {
    Card, CardImg, CardBody, CardSubtitle
} from 'reactstrap';
import "./ProfilePage.css"

export default ({ petpic }) => {
    
    return (
        <>
        <div className="petCard">
            <Card style={{ width: '50%', }}>
                <CardImg top width="100%" src={petpic.url} alt="Card image cap" />
                <CardBody>
                    <h4>{petpic.pet.name}</h4>
                    <CardSubtitle className="postedBy">Posted on {new Date (petpic.timestamp).toLocaleDateString()}</CardSubtitle>

                </CardBody>
            </Card>
        </div>
        </>
    );
};