import React from "react";

export default function CreateTodo({
  todo,
  setTodo,
  handleSubmit,
}) {
  return (
    <div>
      <h1>Todo App </h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="todo"
          placeholder="Enter your tasks : "
          value={todo}
          onChange={(e) => {
            setTodo(e.target.value);
          }}
        />
        <br />
        <button>Add Task</button>
      </form>
    </div>
  );
}
