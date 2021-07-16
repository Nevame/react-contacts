import React from 'react';
import {Card, Col, Button} from 'react-bootstrap';

const UserContact = (props) => {
    return (
<Col md="4">
    <Card >
   
        <Card.Body>
            <Card.Title>{props.userInfo.name}</Card.Title>
            <Card.Text>
            <p>Phone Number: {props.userInfo.Phone_Number}</p>
            <p>Location: {props.userInfo.location}</p>
            </Card.Text>
            <Button variant="primary" >Edit </Button>
            <Button variant="primary">Delete </Button>
        </Card.Body>
    </Card>
</Col>
    );
}

export default UserContact;
