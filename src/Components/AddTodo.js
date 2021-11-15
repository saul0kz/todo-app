import React from "react";
import { useState } from "react";

const AddTodo = ({ addTodo }) => {
  const [content, setContent] = useState("");

  const handleChange = (e) => {
    setContent(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const todo = { id: Math.random, content };
    addTodo(todo);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label> Add new todo: </label>
        <input type="text" onChange={handleChange} id="todo"></input>
        <button>Submit</button>
      </form>
    </div>
  );
};

export default AddTodo;
