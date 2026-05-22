import style from "./DisplayTodo.module.css";
import React from "react";

const DisplayTodo = ({ allTodos, handleDeleteTodo, handleEditTodo }) => {
  //   console.log(allTodos);
  return (
    <div className={style.arrayEle}>
      {allTodos.length ===0 ? <p>No Todos Available</p>: 
      <section>

 {/* <h1>Display todo</h1> */}
      {allTodos.map((ele) => {
        let {id, text}= ele;
        return (
          <div className={style.element} key={id}>
            <h3> {text}</h3>
            <button   onClick={()=>handleEditTodo(id)}>Edit    </button>
            
            <button onClick={()=>handleDeleteTodo(id)} >   Delete</button>
          </div>
        );
      })}
      </section>
      }
     
    </div>
  );
};

export default DisplayTodo;
