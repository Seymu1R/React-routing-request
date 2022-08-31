import React from 'react'
import './index.scss'
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';

function Addlist({list,setListtodo}) {
  const deletCard = (idcontent) => {
    const update = list.filter(({ id }) => idcontent !== id);
    setListtodo(update);
    
  };
 //take history
 const history = useHistory();
 // method for getPost
 const getComment=(id)=>{
   history.push("/comment",id)    
 } 
  
  return (
    <Container>
      <Row>        
        {list.map(({id,header,title}) => (
          <Col md={4}  >
            <Card key={id} >              
              <Card.Img variant="top" src="holder.js/100px160" />
              <Card.Body>
                <Card.Title>{header}</Card.Title>
                <Card.Text>
                  {title}
                </Card.Text>
              </Card.Body>
              <Button onClick={()=>getComment(id)}  variant="primary">Getcomment</Button>
              <Button onClick={()=>deletCard(id)} variant="danger" >Delete</Button>
            </Card>
            </Col>
             )
             )}

      </Row>
    </Container>
  )
}

export default Addlist