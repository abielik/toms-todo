import React, { useState } from "react";

function Todo(props) {
  const { todos } = props;

  function handleEdit() {}

  function handleDelete() {}

  return todos.map((todo, index) => {
    return (
      <div key={index} className="todo">
        <div className="todo-id">{todo.id}</div>
        <div className="todo-text">{todo.text}</div>
        <div className="todo-edit-button" onClick={handleEdit}>
          Edit
        </div>
        <div className="todo-delete-buttun" onClick={handleDelete}>
          Delete
        </div>
      </div>
    );
  });
}

export default Todo;
