import './App.scss';
import React from 'react'
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import { contentService } from './Actions/contents';
import { useHistory } from 'react-router-dom';

function App() {
  //UseState
  const [users, setUsers] = React.useState([]);
  //setSatate with Api data
  React.useEffect(() => {
    contentService.getAllPost().then(({ data }) => {
      setUsers(data)
    })
  }, [])
  //take history
  const history = useHistory();
  // method for getPost
  const getComment=(id)=>{

    history.push("/comment",id) 
    
  }    
    
  

  return (
    <Container>
      <Row>
        {users.map(({ id, title, body }) => (
          <Col md={4} key={id} >
            <Card  >              
              <Card.Img variant="top" src="holder.js/100px160" />
              <Card.Body>
                <Card.Title>{title}</Card.Title>
                <Card.Text>
                  {body}
                </Card.Text>
              </Card.Body>
              <Button onClick={()=>getComment(id)} id={id} variant="primary">Getcomment</Button>
            </Card>
            </Col>
        )
        )}
        </Row>
    </Container>

  );
}

export default App;
