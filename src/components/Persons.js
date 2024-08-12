import React, { useState } from 'react'
import { Button, Card  , Row , Col} from 'react-bootstrap'
import SinglePerson from './SinglePerson'


const Persons = ({persons , handleDelete,setUpdatePerson}) => {
    

    const getOldestPersonId=()=>{
        let oldestPerson=persons[0];
        persons.forEach((p)=>{
            if(p.age>oldestPerson.age)
                oldestPerson=p
        })
        
        return oldestPerson.age
        
    }

    
    return (
        <div>
            <Row>
            {
                persons.map((person) => {
                    
                    return <SinglePerson person={person} setUpdatePerson={setUpdatePerson}   handleDelete={handleDelete}   key={person.id}  oid={getOldestPersonId()}  />

                })
            }
            </Row>
        </div>
    )
}

export default Persons