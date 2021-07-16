import React, { Component } from 'react';
import {Form, Button } from 'react-bootstrap';

class Contactform extends Component {
    constructor(props){
        super(props);
        this.state= {
            name:"",
            phone_number:"",
            location:"",
        }
    }
    handleChange =(e) => {
        e.preventDefault();
        this.setState({
            [e.target.name] : e.target.value
        })
        
    };

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.addUser(this.state);
        this.setState({
            name:"",
            phone_number:"",
            location:"",
        })

    }



    render() {
        return (
<Form onSubmit={this.handleSubmit}>
  <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label>Name</Form.Label>
    <Form.Control type="text" placeholder="Enter name" name="name"  value={this.state.name} onChange={this.handleChange} />
  </Form.Group>

  <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label>Phone_Number</Form.Label>
    <Form.Control type="number" placeholder="Phone_Number" name="phone_number" value={this.state.phone_number} onChange={this.handleChange}  />
  </Form.Group>
  <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label>Location</Form.Label>
    <Form.Control type="text" placeholder="Enter Location" name="location" value={this.state.location} onChange={this.handleChange}/>
  </Form.Group>

  
  <Button variant="primary" type="submit">
    Submit
  </Button>
</Form>
        );
    }
}

export default Contactform;

