import React, { useEffect } from "react";
import Spinner from "react-bootstrap/Spinner";
import Todo from "./NewCards/common/Todo";
import { useDispatch, useSelector } from "react-redux";
import DropDown from "./NewCards/common/DropDown";
import { Paper } from "@mui/material";
import ChecklistIcon from "@mui/icons-material/Checklist";  
import AddTaskIcon from '@mui/icons-material/AddTask';
import { AddCircleOutline, AddCircleRounded } from "@mui/icons-material";

const Todos = () => {
  const dipatch = useDispatch();
  const { todos, loading, filteredTodos } = useSelector((state) => state);
  // console.log(todos);
  const fetchTodosFromAPI = () => {
    dipatch({ type: "START" });
    fetch("https://jsonplaceholder.typicode.com/todos")
      .then((response) => {
        if (!response.ok) throw new Error("Some Error");
        return response.json();
      })
      .then((data) => {
        dipatch({ type: "SUCCESS", payload: data });
      });
  };

  // const handleUpdate = (todo) => {
  //   axios.put(`https://jsonplaceholder.typicode.com/todos/${todo.id}`, {
  //     ...todo,
  //     isDone: !todo.isDone,
  //   });
  //   fetchTodosFromAPI();
  // };

  // const deleteItems = (id) => {
  //   setTodos(todos.filter((todo) => todo.id !== id));
  //   fetch("https://jsonplaceholder.typicode.com/todos/" + id, {
  //     method: "DELETE",
  //   })
  //     .then((response) => {
  //       if (!response.ok) {
  //         throw new Error("Some Error");
  //       }
  //       return response.json();
  //     })
  //     .then((res) => console.log(res));
  // };

  useEffect(() => {
    fetchTodosFromAPI();
  },[])

  const userTodo = filteredTodos;
  const uniqueIds = [...new Set(todos.map((todo) => todo.userId))];
  return (
    <div>
      {loading ? (
        <Spinner animation="border" role="status">
          <span className="visually-hidden">Loading...</span>
        </Spinner>
      ) : (
        <div className="todo-container">
          <Paper>
            <div className="todoDropDown">
              <h2>
                Todo-List <ChecklistIcon />
              </h2>
              <DropDown uniqueIds={uniqueIds} />
              <label  className="addTodo"><AddCircleRounded /></label>
            </div>
           
            {userTodo.length > 1 &&
              userTodo.map((todo) => (
                <>
                  <Todo key={todo.id} todo={todo} />
                </>
              ))}
          </Paper>
        </div>
      )}
    </div>
  );
};

export default Todos;
