import React, { useState } from "react";
import { Col, Row } from "react-bootstrap";
import PersonForm from "./PersonForm";
import Persons from "./Persons";

const MasterPerson = () => {
  const [persons, setPersons] = useState([]);
  const [updatePerson, setUpdatePerson] = useState({
    id: 0,
    name: "",
    age: "",
    department: "",
  });

  const addPerson = (person) => {
    if (updatePerson.name !== "") {
      setPersons(persons.map(p=>{
        if(p.id===person.id){
            return person
        }
        else{
            return p;
        }
        }))
    } else {
      setPersons([...persons, person]);
    }
  };

  const handleDelete = (pid) => {
    setPersons(persons.filter((p) => p.id !== pid));
  };
  return (
    <div>
      <Row>
        <Col>
          <PersonForm addPerson={addPerson} updatePerson={updatePerson} />
        </Col>
        <Col>
          <Persons
            persons={persons}
            setUpdatePerson={setUpdatePerson}
            handleDelete={handleDelete}
          />
        </Col>
      </Row>
    </div>
  );
};

export default MasterPerson;
