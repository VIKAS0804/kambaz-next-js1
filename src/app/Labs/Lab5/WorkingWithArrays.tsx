"use client";
import React, { useState } from "react";

const HTTP_SERVER = process.env.NEXT_PUBLIC_HTTP_SERVER;

export default function WorkingWithArrays() {
  const API = `${HTTP_SERVER}/lab5/todos`;
  const [todo, setTodo] = useState({
    id: "1",
    title: "NodeJS Assignment",
    description: "Create a NodeJS server with ExpressJS",
    due: "2021-09-09",
    completed: false,
  });

  return (
    <div id="wd-working-with-arrays">
      <h3>Working with Arrays</h3>
      
      {/* Retrieving Arrays */}
      <h4>Retrieving Arrays</h4>
      <a id="wd-retrieve-todos" className="btn btn-primary" href={API}>
        Get Todos
      </a>
      <hr/>
      
      {/* Retrieving an Item by ID */}
      <h4>Retrieving an Item from an Array by ID</h4>
      <a 
        id="wd-retrieve-todo-by-id" 
        className="btn btn-primary float-end" 
        href={`${API}/${todo.id}`}>
        Get Todo by ID
      </a>
      <input 
        id="wd-todo-id" 
        value={todo.id} 
        className="form-control w-50"
        onChange={(e) => setTodo({ ...todo, id: e.target.value })} 
      />
      <hr />
      
      {/* Filtering Array Items */}
      <h4>Filtering Array Items</h4>
      <a 
        id="wd-retrieve-completed-todos" 
        className="btn btn-primary"
        href={`${API}?completed=true`}>
        Get Completed Todos
      </a>
      <hr/>
      
      {/* Creating new Items */}
      <h4>Creating new Items in an Array</h4>
      <a 
        id="wd-create-todo" 
        className="btn btn-primary"
        href={`${API}/create`}>
        Create Todo
      </a>
      <hr/>
      
      {/* Removing from an Array */}
      <h4>Removing from an Array</h4>
      <a 
        id="wd-remove-todo" 
        className="btn btn-primary float-end" 
        href={`${API}/${todo.id}/delete`}>
        Remove Todo with ID = {todo.id}
      </a>
      <input 
        value={todo.id} 
        className="form-control w-50" 
        onChange={(e) => setTodo({ ...todo, id: e.target.value })}
      />
      <hr/>
      
      {/* Updating an Item - Title */}
      <h4>Updating an Item in an Array</h4>
      <a 
        href={`${API}/${todo.id}/title/${todo.title}`} 
        className="btn btn-primary float-end">
        Update Title
      </a>
      <input 
        value={todo.id} 
        className="form-control w-25 float-start me-2"
        onChange={(e) => setTodo({ ...todo, id: e.target.value })}
      />
      <input 
        value={todo.title} 
        className="form-control w-50 float-start"
        onChange={(e) => setTodo({ ...todo, title: e.target.value })}
      />
      <br /><br />
      <hr />
      
      {/* Updating Description */}
      <h4>Updating Description</h4>
      <a 
        href={`${API}/${todo.id}/description/${todo.description}`} 
        className="btn btn-primary float-end"
        id="wd-update-todo-description">
        Update Description
      </a>
      <input 
        value={todo.id} 
        className="form-control w-25 float-start me-2"
        onChange={(e) => setTodo({ ...todo, id: e.target.value })}
      />
      <input 
        value={todo.description} 
        className="form-control w-50 float-start"
        onChange={(e) => setTodo({ ...todo, description: e.target.value })}
      />
      <br /><br />
      <hr />
      
      {/* Updating Completed */}
      <h4>Updating Completed Status</h4>
      <a 
        href={`${API}/${todo.id}/completed/${todo.completed}`} 
        className="btn btn-primary float-end"
        id="wd-update-todo-completed">
        Update Completed
      </a>
      <input 
        value={todo.id} 
        className="form-control w-25 float-start me-2"
        onChange={(e) => setTodo({ ...todo, id: e.target.value })}
      />
      <input 
        type="checkbox"
        checked={todo.completed}
        className="form-check-input float-start"
        onChange={(e) => setTodo({ ...todo, completed: e.target.checked })}
      />
      <label className="form-check-label float-start ms-2">Completed</label>
      <br /><br />
      <hr />
    </div>
  );
}