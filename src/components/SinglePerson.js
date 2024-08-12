import React from 'react'
import { Button, Card, Col  , Badge} from 'react-bootstrap'

const SinglePerson = ({person , handleDelete , setUpdatePerson, oid}) => {
    return (
        
            <Col><Card style={{ width: '18rem' }}>

                <Card.Body>
                    <Card.Title>{person.id}&nbsp;&nbsp;&nbsp;&nbsp;{person.age===oid &&  <Badge bg="secondary">Oldest</Badge>}</Card.Title>
                    <Card.Text>
                        {person.name}-{person.age}-{person.department}
                    </Card.Text>
                    <Button variant="danger" onClick={()=>handleDelete(person.id)}>Delete</Button>
                    <Button variant='success' onClick={()=>setUpdatePerson(person)}>Update</Button>
                </Card.Body>
            </Card></Col>
        
    )
}

export default SinglePerson