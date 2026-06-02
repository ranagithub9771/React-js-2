import React from 'react'

function Child4({str, arr, obj:{fname, lname}}) {
  return (
    <div>
        <h1>Child4 Components</h1>
   <h4>str:{str}</h4>
   <h4>arr:{arr}</h4>
   <h4>name:{fname, lname}</h4>
    </div>
  )
}

export default Child4