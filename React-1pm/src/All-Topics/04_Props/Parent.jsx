import React from 'react'
import Child1 from './Child1'
import Child2 from './Child2';
import Child3 from './Child3';
import Child4 from './Child4';

function Parent() {
    let str = "Hello World";
    let obj = {fname:"John", lname:"Doe"};
    let arr= [1,2,3,4,5];
  return (
    <div>
        {/* sending multiple props */}
        <h1>Parent Components</h1>
        <Child1 str={str} obj={obj} arr={arr} />

        <hr />

        {/* Sending single prop with multiple data */}
         <Child2 data={{str, obj, arr}}/>

         <hr />
         <Child3 str={str} obj={obj} arr={arr} /> 
         <hr />
         <Child4 str={str} obj={obj} arr={arr} /> 
    </div>
  )
}

export default Parent