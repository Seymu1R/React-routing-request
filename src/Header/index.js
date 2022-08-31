import React from 'react';
import './index.scss'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
  import { Container, Row, Col, Card ,Button} from 'react-bootstrap';

function Header() {
  return (
    <Container className='header-top' >
        <Row>
            <Col md={4} >
            <Button variant="success" ><Link to="/">Home</Link></Button>
            
            </Col>
            <Col md={4} >
            
            <Button variant="warning" ><Link to="/list">List</Link></Button>
            </Col>
            <Col md={4} >
            
            <Button variant="info" ><Link to="/comment">Comments</Link></Button>
            </Col>
        

        </Row>
    </Container>
    
      
      
      
   
  )
}

export default Header