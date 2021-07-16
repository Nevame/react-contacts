import React from 'react';
import { Container, Row,  } from 'react-bootstrap';
import UserContact from './UserContact';

const UsersContacts = (props) => {
    return (
        <Container>
            <Row>
                {
                    props.userData.map((user, index) => {
                        return <UserContact userInfo ={user} key={index} /> 

                    })
                }
                
            </Row>
            
        </Container>
    );
}

export default UsersContacts;
