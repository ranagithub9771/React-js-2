import React, { useEffect, useState } from "react";

function LifeCycleFBC() {
  const [count, setCount] = useState(0);
  const [initial, setInitial] = useState(true);
  const [data, setData] = useState("Hii");

  useEffect(() => {
    console.log("Component Mounted");
  }, []);

  useEffect(() => {
    if (initial) {
      setInitial(false);
      return;
    }
    console.log("Component Updated ");
  }, [count]);

  return (
    <>
      <h1>Learn Life Cycle in Function Based </h1>
      <h3>counter :{count}</h3>
      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        Increament
      </button>
      <h2>{data}</h2>
      <button onClick={() => setData("Byee")}>Click</button>
    </>
  );
}

export default LifeCycleFBC;
