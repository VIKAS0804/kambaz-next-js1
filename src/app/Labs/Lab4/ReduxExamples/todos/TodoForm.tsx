"use client";

import { useSelector, useDispatch } from "react-redux";
import { addTodo, updateTodo, setTodo } from "./todosReducer";
import { ListGroupItem, Button, FormControl } from "react-bootstrap";

export default function TodoForm() {
  const { todo } = useSelector(
    (state: { todosReducer: { todo: { title: string; id?: string } } }) =>
      state.todosReducer
  );
  const dispatch = useDispatch();
  
  return (
    <ListGroupItem>
      <Button
        onClick={() => dispatch(addTodo(todo))}
        variant="success"
        className="me-2"
        id="wd-add-todo-click"
      >
        Add
      </Button>
      <Button
        onClick={() => dispatch(updateTodo(todo))}
        variant="primary"
        className="me-2"
        id="wd-update-todo-click"
      >
        Update
      </Button>
      <FormControl
        value={todo.title}
        onChange={(e) => dispatch(setTodo({ ...todo, title: e.target.value }))}
        className="d-inline w-50"
      />
    </ListGroupItem>
  );
}