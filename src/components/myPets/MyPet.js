import React from "react"
import {
    Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button
  } from 'reactstrap';

export default ({pet}) => {
    return (
      <div>
        <Card style={{ width: '15rem', }}>
          <CardImg top width="100%" src={pet.petpic.url} alt="Card image cap" />
          <CardBody>
            <CardTitle>{pet.name}</CardTitle>   
            <Button color="primary">Edit</Button>
          </CardBody>
        </Card>
      </div>
    );
  };