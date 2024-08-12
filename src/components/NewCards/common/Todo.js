import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Checkbox from "@mui/material/Checkbox";
import DeleteIcon from "@mui/icons-material/Delete";

import React from "react";
import { useDispatch } from "react-redux";

const Todo = ({ todo }) => {
  const dispatch = useDispatch();

  const handleToggle = (todo) => {
    console.log(todo);
    dispatch({ type: "CHECKED", payload: todo });
  };
  const labelId = `checkbox-list-label-${todo.title}`;
  return (
    <div style={{ padding: "10px" }}>
      <List
        key={todo.id}
        sx={{ width: "370px", bgcolor: "background.paper" }}
        className="cardTodo"
      >
        <ListItem key={todo}>
          <ListItemButton
            role={undefined}
            onClick={() => handleToggle(todo)}
            dense
          >
            <ListItemIcon>
              <Checkbox
                edge="start"
                checked={todo.completed}
                tabIndex={-1}
                disableRipple
                inputProps={{ "aria-labelledby": labelId }}
              />
            </ListItemIcon>
            <ListItemText
              id={labelId}
              primary={todo.title}
              className={todo.completed && `todo-Strike`}
            />
          </ListItemButton>
          <label
            onClick={() =>
              dispatch({
                type: "DELETE",
                payload: { userId: todo.userId, id: todo.id },
              })
            }
          >
            <DeleteIcon style={{ color: "#d4456a" }} />
          </label>
        </ListItem>
      </List>
    </div>
  );
};

export default Todo;
