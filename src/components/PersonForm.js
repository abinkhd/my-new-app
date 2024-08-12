import React, { useEffect, useState } from 'react'
import { Form, Container , Button } from 'react-bootstrap'

const PersonForm = ({addPerson,updatePerson}) => {
    const [login , setLogin]=useState({id:0 ,name:'' , age:'' , department:''})
    
    useEffect(()=>{
        if(updatePerson!==''){
        setLogin(updatePerson)
    }},[updatePerson])

    const changeHandler=(e)=>{
        console.log(e.target.name)
        console.log(e.target.value)
        setLogin({...login , [e.target.name]:e.target.value})
        console.log(login)
    }

    return (
        <div>
            {updatePerson?updatePerson.id:''}
            <Container>
                <Form style={{ width: '400px' }}>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                        <Form.Label>Person ID</Form.Label>
                        <Form.Control type="text" value={login.id}  name='id' onChange={(e)=>changeHandler(e)}/>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                        <Form.Label>Person Name</Form.Label>
                        <Form.Control type="text" value={login.name}  name='name' onChange={(e)=>changeHandler(e)}/>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                        <Form.Label>Person Age</Form.Label>
                        <Form.Control type="text" value={login.age}  name='age' onChange={(e)=>changeHandler(e)}/>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                        <Form.Label>Person Department</Form.Label>
                        <Form.Control type="text" value={login.password}  name='department' onChange={(e)=>changeHandler(e)}/>
                    </Form.Group>
                    <Button variant='success' onClick={()=>addPerson(login)}>{updatePerson.name!==''?'Update':'Add Person'}</Button>
                </Form>
            </Container>
        </div>
    )
}

export default PersonForm