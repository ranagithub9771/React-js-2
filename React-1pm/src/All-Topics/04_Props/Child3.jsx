import React from 'react'

function Child3(props) {
    console.log(props);
    let {str, obj:{fname, lname},arr} = props;
  return (
    <div>
        <h1>Child3 Component </h1>
        <h4>{str} {fname,lname} {arr}</h4>
    </div>
  )
}

export default Child3