//use reducer is similar to use state except that usereducer will be used for complex state management
import React, { useReducer } from 'react'
import { Button, Table , Card} from 'react-bootstrap'
 
 
const Reducer = () => {
    const reducer = (state, action) => {
        switch (action.type) {
            case 'INCR':
                return { count: state.count + 1 }
            case 'DECR':
                return { count: state.count + 1 }
            case 'RESET':
                return { count: 0 }
            default:
                return state
        }
    }
 
 
    const [state, dispacth] = useReducer(reducer, { count: 0 })
    const initPersons = [
        { id: 1, name: 'nikhil', age: 21, department: 'sales', isMarried: false },
        { id: 2, name: 'nitin', age: 22, department: 'sales', isMarried: false },
        { id: 3, name: 'shreya', age: 23, department: 'marketing', isMarried: false },
        { id: 4, name: 'nidhi', age: 19, department: 'marketing', isMarried: false },
        { id: 5, name: 'nishtha', age: 20, department: 'sales', isMarried: false },
        { id: 6, name: 'amit', age: 18, department: 'finance', isMarried: true }
    ]
 
    const personsReducer = (state, action) => {
        switch (action.type) {
            case 'DELETE':
                return {...state, initPersons:state.initPersons.filter((p) => p.id !== action.payload)}
            case 'INCR_AGE':
                return {...state , initPersons:state.initPersons.map((p) => {
                    if (p.id === action.payload)
                        return { ...p, age: p.age + 1 }
                    else
                        return p
                })}
            case 'NAME_IN_CAPS':
                return {...state , initPersons:state.initPersons.map((p) => {
                    if (p.id === action.payload)
                        return { ...p, name: p.name.toUpperCase() }
                    else
                        return p
                })}
 
            case 'SORT':
                return {...state , initPersons:[...state.initPersons.sort((a, b) => a.age - b.age)]}
            case 'SELECT':
                return {...state , selectedPerson:action.payload}
            default:
                return state
        }
    }
 
    const [persons, personDisptach] = useReducer(personsReducer, { initPersons: initPersons, selectedPerson: {id: 0, name: '', age:0, department: '', isMarried: false} })
    return (
        <div>
 
 
 
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>NAME</th>
                        <th>AGE</th>
                        <th>DEPARTMENT</th>
                        <th>ISMARRIED</th>
                        <th>DELETE</th>
                        <th>INCR AGE</th>
                        <th>NAME IN CAPS</th>
                        <th>SELECT</th>
 
                    </tr>
                </thead>
                <tbody>
                    {persons.initPersons.map((p) => {
                        return <tr>
                            <td>{p.id}</td>
                            <td>{p.name}</td>
                            <td>{p.age}</td>
                            <td>{p.department}</td>
                            <td><input type='checkbox' checked={p.isMarried} /></td>
                            <td><Button variant='danger' onClick={() => personDisptach({ type: 'DELETE', payload: p.id })}>Delete</Button></td>
                            <td><Button variant='success' onClick={() => personDisptach({ type: 'INCR_AGE', payload: p.id })}>Incr Age</Button></td>
                            <td><Button variant='warning' onClick={() => personDisptach({ type: 'NAME_IN_CAPS', payload: p.id })}>Name in caps</Button></td>
                            <td><Button variant='info' onClick={() => personDisptach({ type: 'SELECT', payload: p })}>Select</Button></td>
                        </tr>
                    })}
                </tbody>
            </Table>
 
 
            <Button variant='primary' onClick={() => personDisptach({ type: 'SORT' })}>Sort By Age</Button>
 
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src="holder.js/100px180" />
                <Card.Body>
                    <Card.Title>{persons.selectedPerson.name}</Card.Title>
                    <Card.Text>
                        {persons.selectedPerson.age}
                    </Card.Text>
                    <Button variant="primary">Go somewhere</Button>
                </Card.Body>
            </Card>
        </div>
    )
}
 
export default Reducer