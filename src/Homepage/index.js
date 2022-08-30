import React from 'react'
import { Container, Row, Col, Card ,Button} from 'react-bootstrap';
import { contentService } from '../Actions/contents';

function List() {
    //UseState
    const [users, setUsers] = React.useState([]);
    //setSatate with Api data
    React.useEffect(() => {
        contentService.getAllPost().then(({ data }) => {
            setUsers(data)
        })
    }, [])
    return (
        <div><input></input></div>
    )
}

export default List