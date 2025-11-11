"use client";

import { useDispatch } from "react-redux";
import { deleteTodo, setTodo } from "./todosReducer";
import { ListGroupItem, Button } from "react-bootstrap";

export default function TodoItem({ todo }: { todo: { id: string; title: string } }) {
  const dispatch = useDispatch();
  
  return (
    <ListGroupItem key={todo.id}>
      <Button
        onClick={() => dispatch(deleteTodo(todo.id))}
        variant="danger"
        size="sm"
        className="float-end"
        id="wd-delete-todo-click"
      >
        Delete
      </Button>
      <Button
        onClick={() => dispatch(setTodo(todo))}
        variant="warning"
        size="sm"
        className="float-end me-2"
        id="wd-set-todo-click"
      >
        Edit
      </Button>
      {todo.title}
    </ListGroupItem>
  );
}