import React, { useState } from 'react'
import CreateTodo from './CreacteTodo/CreateTodo';

export default function TdodoWrapper() {
  const [todo, setTodo] = useState("");
  const handleSubmit = (e)=>{
    e.preventDefault()
    console.log(todo);
  }
  

  return (
    <div>
      <CreateTodo todo={todo} setTodo={setTodo} handleCreateTodo={handleSubmit} />
    </div>
  )
}
