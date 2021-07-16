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
        location:"London"
      },

        {
        Name:"Kofi Togo",
        Phone_Number:"23344599955",
        location:"Paris"
      },

        {
        Name:"Kofi Kofi",
        Phone_Number:"23344599955",
        location:"Austria"
      }
        
      ]
    }
  }

  addNewUser = (user) => {
    this.setState({
      users:[...this.state.users,user]
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
         <UsersContacts userData={this.state.users} />
          </Col>
        </Row>
      </Container>
        
      </>
    );
  }

  }
  

export default App;
