import React, { useCallback, useMemo, useState } from "react";
import Child from "./Child";

function Optimation() {
  const [add, setAdd] = useState(0);
  const [minus, setMinus] = useState(100);

  const handleAdd = () => {
    setAdd((prev) => prev + 1);
  };

  const handleMinus = () => {
    setMinus((prev) => prev - 1);
  };

//   const multiply = () => add * 5;
//!it return memoized value 
const multiply = useMemo(()=>{
    console.log("Multiplication is running");
    return add* 5;
},[add]);

//!it return memoized value 
const data = useCallback(()=>{
console.log("I am data function ");

},[minus])


  return (
    <div>
      <h1>Learn Optimation Techniques </h1>

      <section>
        <strong>Addition :{add}</strong>
        <br />
        <button onClick={handleAdd}>➕</button>
        
      </section>
      <hr />
      <br />

      <section>
        <strong>Substraction :{minus}</strong>
        <br />
        <button onClick={handleMinus}>➖</button>
        
      </section>
      <hr />
      <section><h3> Multiplication is  {multiply}</h3></section>
      <h3><Child data={data}/></h3>
    </div>
  );
}

export default Optimation;
