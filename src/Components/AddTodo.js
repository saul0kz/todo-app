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
    setContent("");
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label> Add new todo: </label>
        <input
          type="text"
          onChange={handleChange}
          value={content}
          id="todo"
        ></input>
      </form>
    </div>
  );
};

export default AddTodo;
