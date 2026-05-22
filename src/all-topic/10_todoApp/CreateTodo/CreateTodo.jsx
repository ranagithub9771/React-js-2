import style from "./CreateTodo.module.css";

import React from "react";

export default function CreateTodo({todo, setTodo, handleCreateTodo, editTodoId}) {
  return (
    <form className={style.todoForm} onSubmit={handleCreateTodo}>
      <input
        type="text"
        name="todo"
        id="todo"
        placeholder="Enter your tasks.. :"
        value={todo}
        onChange={(e)=> setTodo(e.target.value)}
      ></input>
      <button>{editTodoId ? "Update" : "Create"}</button>
    </form>
  );
}
