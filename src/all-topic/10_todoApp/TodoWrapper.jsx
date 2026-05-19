import DisplayTodo from "./DisplayTodo/DisplayTodo";
import CreateTodo from "./CreateTodo/CreateTodo";
import style from "./TodoWrapper.module.css";
import { useState } from "react";

const TodoWrapper = () => {
  const [todo, setTodo] = useState("");
  const [allTodos, setAllTodo] = useState(() => {
    let todos = localStorage.getItem("todos");
    return todos ? JSON.parse(todos) : [];
  });

  const handleCreateTodo = (e) => {
    e.preventDefault();
    console.log("Todo created");

    let newTodo = {
      id: Date.now(),
      text: todo.trim(),
    };

    console.log(newTodo);

    //persisting new todos in localstorage

    const todos = JSON.parse(localStorage.getItem("todos")) || [];
    todos.push(newTodo);
    localStorage.setItem("todos", JSON.stringify(todos));

    setAllTodo(todos);
    setTodo("");
  };

  return (
    <main className={style.wrapper}>
      <h1 className={style.heading}> Todo App</h1>
      <CreateTodo
        todo={todo}
        setTodo={setTodo}
        handleCreateTodo={handleCreateTodo}
      />
      <DisplayTodo />
    </main>
  );
};

export default TodoWrapper;
