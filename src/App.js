import React, {Component} from 'react'
import { Container, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import UsersContacts from './components/UsersContacts';
import Contactform from './components/Contactform';



class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      users: [
        {
        Name:"Kofi Ghana",
        Phone_Number:"23344555",
        location:"London",
        id:"12345aaa"
      },

        {
        Name:"Kofi Togo",
        Phone_Number:"23344599955",
        location:"Paris",
        id:"123456bb"
      },

        {
        Name:"Kofi Kofi",
        Phone_Number:"23344599955",
        location:"Austria",
        id:"123456cc"
      }
        
      ]
    }
  }

  addNewUser = (user) => {
    user.id = Math.random.toString()
    this.setState({
      
      users:[...this.state.users,user]
    })
  }

  deleteUser = (id) => {
    let undeletedUsers = this.state.users.filter((user) => user.id !== id);
    this.setState({
      users: undeletedUsers
    })

  }

  editUser = (id, updatedUser) => {
    this.setState({
      users: this.state.users.map(user => user.id === id ? updatedUser : user)
    })
  }

  render(){
    return (
      <>
      <Container fluid style={{marginTop:"2rem"}}>
        <Row>
          <Col md="4">
            <Contactform addUser = {this.addNewUser} />
          </Col>
          <Col>
         <UsersContacts userData={this.state.users} deleteUser ={this.deleteUser} editUser={this.editUser} />
          </Col>
        </Row>
      </Container>
        
      </>
    );
  }

  }
  

export default App;
