import React from 'react'

function Child2(props) {
console.log(props.data);
  return (
    <div>
        <h1>Child2 Components</h1>
        <p>{props.data.str}</p>
        <p>{props.data.obj.fname}</p>
        <p>{props.data.obj.lname}</p>
        <p>{props.data.arr}</p>

        
         </div>
  )
}

export default Child2