import React, {useState} from 'react';
import {Card, Col, Button, Modal} from 'react-bootstrap';
import EditContactform from './EditContactform';

const UserContact = (props) => {
    const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

    const handleDelete = (e) => {
        e.preventDefault();
        props.deleteUser(props.userInfo.id);
    }
    return (
<>
<Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Edit User</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <EditContactform userInfo={props.userInfo} editUser={props.editUser}  closeModal={handleClose}/>
        </Modal.Body>
        
        
      </Modal>



<Col md="4">
    <Card >
   
        <Card.Body>
            <Card.Title>{props.userInfo.name}</Card.Title>
            <Card.Text>
            <p>Phone Number: {props.userInfo.Phone_Number}</p>
            <p>Location: {props.userInfo.location}</p>
            </Card.Text>
            <Button variant="primary" size="sm" onClick={handleShow} >Edit </Button>
            <Button variant="danger" size="sm" onClick={handleDelete}>Delete </Button>
        </Card.Body>
    </Card>
</Col>
</>
    );
}

export default UserContact;
