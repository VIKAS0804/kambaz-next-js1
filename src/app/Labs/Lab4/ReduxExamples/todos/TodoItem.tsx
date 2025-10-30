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
        className="btn btn-danger me-2 btn-sm"
        id="wd-delete-todo-click"
      >
        Delete
      </Button>
      <Button
        onClick={() => dispatch(setTodo(todo))}
        className="btn btn-primary btn-sm"
        id="wd-set-todo-click"
      >
        Edit
      </Button>
      <span className="ms-2">{todo.title}</span>
    </ListGroupItem>
  );
}