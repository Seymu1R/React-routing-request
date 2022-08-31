import React from 'react'
import './index.scss'
import { Container, Row, Col, Card, Button } from 'react-bootstrap';

function Addlist({list}) {
  return (
    <Container>
      <Row>
        {list.map(() => (
          <Col md={4}  >
            <Card  >              
              <Card.Img variant="top" src="holder.js/100px160" />
              <Card.Body>
                <Card.Title>salam</Card.Title>
                <Card.Text>
                  sa
                </Card.Text>
              </Card.Body>
              <Button variant="primary">ADD TO LIST</Button>
            </Card>
            </Col>

        )

        )}

      </Row>
    </Container>
  )
}

export default Addlist