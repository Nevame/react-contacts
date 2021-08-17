import React from 'react';
import { Container, Row,  } from 'react-bootstrap';
import UserContact from './UserContact';

const UsersContacts = (props) => {
    return (
        <Container>
            <Row>
                {
                    props.userData.map((user) => {
                        return <UserContact userInfo ={user} key={user.id} deleteUser = {props.deleteUser} editUser ={props.editUser}/> 

                    })
                }
                
            </Row>
            
        </Container>
    );
}

export default UsersContacts;
