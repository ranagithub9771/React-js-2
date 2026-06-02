import React from 'react'

 function Child({data}) {
    console.log("child compo",data);
    
  return (
    <div> I am  Child</div>
  )
}

export default React.memo(Child);

//!It is used to memoize the component until data is unchanged. 
