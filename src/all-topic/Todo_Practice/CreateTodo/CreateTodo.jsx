import React from 'react'

function CreateTodo() {
  return (
    <div>
        <form>
            <input 
            type="text"
            name="todo"
            placeholder='Enter the Tasks  :'
            />
            <br />
            <button >Add</button>
        </form>
    </div>
  )
}

export default CreateTodo