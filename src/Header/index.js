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
    <Container>
        <Row>
            <Col md={6} >
            <Button variant="success" ><Link to="/">Home</Link></Button>
            
            </Col>
            <Col md={6} >
            
            <Button variant="warning" ><Link to="/list">List</Link></Button>
            </Col>
        

        </Row>
    </Container>
    
      
      
      
   
  )
}

export default Header