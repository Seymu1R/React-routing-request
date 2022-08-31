import { logDOM } from '@testing-library/react';
import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { useLocation } from 'react-router-dom';
import { contentService } from '../Actions/contents';

function Comments() {
    //take location
    const location = useLocation();
    //states
    const [comment, setComments] = React.useState({});
    //getcomment by id
    React.useEffect(() => {
        contentService.getComments(location.state).then(({ data }) => {
            setComments(data);            
        })
    }, [location.state])
    return (
        <Container>
            <Row>
                <Col md={6} >
                    <Card border="info" style={{ width: '18rem' }}>
                        <Card.Header>{comment.id}</Card.Header>
                        <Card.Body>
                            <Card.Title>{comment.name}</Card.Title>
                            <Card.Text>
                            {comment.body}
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>


            </Row>
        </Container>
    )
}

export default Comments