import React from 'react'

function Child_2({data:{data1,data2,data3:{name}}}) {
    // let {data1,data2,data3} = props.data;
    // console.log(props);
    // console.log(props.data);
    console.log(data1);
    console.log(data2);
    console.log(name);
    
    
  return (
    <div>Child_2</div>
    
  )
}

export default Child_2;