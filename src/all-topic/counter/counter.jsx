import { useState } from "react";

export const Counter = () => {
  const [count, setCount] = useState(0);
  const [name, setName] = useState("Sunny");
  const [theme, setTheme] = useState("light");

  const handleTheme = () => {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  };
  return (
    <div  style=
      {{
        backgroundColor: theme === "dark" ? "black" : "white",
        color: theme === "light" ? "black" : "white",
        height: "100vh",
      }}>
     
      <h1>Printing Counter : </h1>
      <h2>{count}</h2>
      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        {" "}
        Increment{" "}
      </button>
      <br />
      <br />
      <button
        onClick={() => {
          setCount(count - 1);
        }}
      >
        {" "}
        Decreament{" "}
      </button>
      <br />
      <br />

      <button
        onClick={() => {
          setCount(0);
        }}
      >
        Reset
      </button>
      <br />
      <br />

      <h3>Name : {name}</h3>
      <button
        onClick={() => {
          setName("Rana pratap");
        }}
      >
        {" "}
        Click here to change name :
      </button>
      <br />
      <br />

      <button onClick={handleTheme}>
        {theme === "light" ? "Switch to Dark Mode" : "Switch to Light Mode"}
      </button>
    </div>
  );
};
