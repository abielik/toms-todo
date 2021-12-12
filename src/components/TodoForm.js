import React, { useState } from "react";

function TodoForm(props) {
  const [input, setInput] = useState("");

  function handleSubmit(e) {
    e.preventDefault();

    props.addTodo({
      id: new Date(),
      text: input,
    });

    setInput("");
  }

  function handleChange(e) {
    setInput(e.target.value);
  }

  return (
    <form className="todo-form" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Add a new todo"
        value={input}
        name="new-task"
        className="todo-input"
        onChange={handleChange}
      ></input>
      <button className="todo-button">Add</button>
    </form>
  );
}

export default TodoForm;
