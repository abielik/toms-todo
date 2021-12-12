import React, { useState } from "react";
import TodoForm from "./TodoForm";

function TodoList() {
  const [todos, setTodos] = useState([]);

  function addTodo(todo) {
    if (!todo.text) {
      return;
    }

    const newTodos = [todo, ...todos];
    setTodos(newTodos);
    console.log("Origin: TodoList.js", ...todos);
  }

  return (
    <div>
      <h1>What's the plan for today?</h1>
      <TodoForm addTodo={addTodo} />
    </div>
  );
}

export default TodoList;
