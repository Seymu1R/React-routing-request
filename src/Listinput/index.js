import React from 'react'
import { Container, Row, Col, Card ,Button} from 'react-bootstrap';
import Addlist from '../Addlist';
import './index.scss'

function Listinput() {
    //UseState
    const [header, setHeader] = React.useState('');
    const [title, setTitle] = React.useState('');
    const[id,setId]=React.useState(101);
    const [listtodo,setListtodo] = React.useState([]);
    //onChange methods
    const headerChange = React.useCallback((e) => { setHeader(e.target.value) }, [])
    const titleChange = React.useCallback((e) => { setTitle(e.target.value) }, [])
    //addTolist method and push data
    const addTolist=()=>{
         listtodo.push({
            id:id,
            header:header,
            title:title
        })
        setId(id+1);
        setListtodo(listtodo);

    }  

    return (
        
        <Container>
            <Row>
                <Col md={6} ><input onChange={headerChange} placeholder={'Add Header'} type={'text'} ></input></Col>
                <Col md={6} ><input onChange={titleChange} placeholder={'Add Title'} type={'text'} ></input></Col>                
            </Row>            
                <button onClick={addTolist} className={'add-btn'} >Add</button>
            <Addlist list={listtodo} setListtodo={setListtodo} />                
        </Container>
        
    )
}

export default Listinput