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
  const [editTodoId, setEditTodoId] = useState(null);

  const handleCreateTodo = (e) => {
    e.preventDefault();

    if (editTodoId) {
      const updatedTodos = allTodos.map((ele) => {
        if (ele.id === editTodoId) {
          return { ...ele, text: todo.trim() };
        }
        return ele;
      });
      setAllTodo(updatedTodos);
      localStorage.setItem("todos", JSON.stringify(updatedTodos));
      setTodo("");
      setEditTodoId(null);
      return;
    }

    let newTodo = {
      id: Date.now(),
      text: todo.trim(),
    };

    const todos = JSON.parse(localStorage.getItem("todos")) || [];
    todos.push(newTodo);
    localStorage.setItem("todos", JSON.stringify(todos));

    setAllTodo(todos);
    setTodo("");
  };

  const handleDeleteTodo = (id) => {
    let todos = [...allTodos];
    let filterTodos = todos.filter((ele) => ele.id !== id);
    setAllTodo(filterTodos);
    localStorage.setItem("todos", JSON.stringify(filterTodos));
  };

  const handleEditTodo = (id) => {
    let todos = [...allTodos];
    setEditTodoId(id);
    const todoToBeEdited = todos.find((ele) => ele.id === id);
    setTodo(todoToBeEdited.text);
  };

  return (
    <main
      id="todo-app-root"
      className={style.wrapper}
    >
      {/* ── App Heading ── */}
      <h1
        id="todo-heading"
        className={style.heading}
      >
        Todo App
      </h1>

      {/* ── Create / Edit Todo Form ── */}
      <section
        id="todo-create-section"
        className={style.card}
      >
        {/* Edit mode label */}
        <p
          id="todo-form-label"
          className={style.sectionLabel}
        >
          {editTodoId ? (
            <>✏️ &nbsp;Editing Task</>
          ) : (
            <>➕ &nbsp;New Task</>
          )}
        </p>

        <CreateTodo
          todo={todo}
          setTodo={setTodo}
          handleCreateTodo={handleCreateTodo}
          editTodoId={editTodoId}
        />
      </section>

      {/* ── Display Todos List ── */}
      <section
        id="todo-display-section"
        className={style.card}
        style={{ marginTop: "20px" }}
      >
        {/* Section header with count badge */}
        <p
          id="todo-list-label"
          className={style.sectionLabel}
        >
          📋 &nbsp;Your Tasks
          {allTodos.length > 0 && (
            <span
              id="todo-count-badge"
              className={style.countBadge}
            >
              {allTodos.length}
            </span>
          )}
        </p>

        {/* Divider */}
        <div
          id="todo-list-divider"
          className={style.divider}
        />

        {/* Empty state */}
        {allTodos.length === 0 && (
          <div
            id="todo-empty-state"
            className={style.emptyState}
          >
            <span>🗒️</span>
            No tasks yet. Add one above!
          </div>
        )}

        {/* Todo items list */}
        {allTodos.length > 0 && (
          <ul
            id="todo-list"
            className={style.todoList}
            style={{ listStyle: "none", margin: 0, padding: 0 }}
          >
            {allTodos.map((ele, index) => (
              <li
                key={ele.id}
                id={`todo-item-${ele.id}`}
                className={style.todoItem}
              >
                {/* Index badge */}
                <span
                  id={`todo-badge-${ele.id}`}
                  className={style.todoBadge}
                >
                  {index + 1}
                </span>

                {/* Todo text */}
                <span
                  id={`todo-text-${ele.id}`}
                  className={style.todoText}
                >
                  {ele.text}
                </span>

                {/* Action buttons */}
                <div
                  id={`todo-actions-${ele.id}`}
                  style={{ display: "flex", gap: "8px" }}
                >
                  <button
                    id={`todo-edit-btn-${ele.id}`}
                    className={`${style.btnIcon} ${style.btnIconEdit}`}
                    onClick={() => handleEditTodo(ele.id)}
                    title="Edit task"
                    aria-label={`Edit task: ${ele.text}`}
                  >
                    ✏️
                  </button>

                  <button
                    id={`todo-delete-btn-${ele.id}`}
                    className={`${style.btnIcon} ${style.btnIconDelete}`}
                    onClick={() => handleDeleteTodo(ele.id)}
                    title="Delete task"
                    aria-label={`Delete task: ${ele.text}`}
                  >
                    🗑️
                  </button>
                </div>
              </li>
            ))}
          </ul>
        )}

        {/* Inline DisplayTodo (if you use it for extra features) */}
        <DisplayTodo
          allTodos={allTodos}
          handleEditTodo={handleEditTodo}
          handleDeleteTodo={handleDeleteTodo}
        />
      </section>
    </main>
  );
};

export default TodoWrapper;