import React, { useState } from "react";
import TodoForm from "./TodoForm";
import Todo from "./Todo";

function TodoList() {
  const [todos, setTodos] = useState([]);

  function addTodo(todo) {
    if (!todo.text) {
      return;
    }

    const newTodos = [todo, ...todos];
    setTodos(newTodos);
    console.log(todo, ...todos);
  }

  return (
    <div>
      <h1>What's the plan for today?</h1>
      <TodoForm addTodo={addTodo} />
      <Todo todos={todos} />
    </div>
  );
}

export default TodoList;
