import { useState } from "react";

export const ToggleBtn =()=>{

    const [theme, setTheme] = useState("light");

    const handleTheme =()=>{
    setTheme((pre)=>{
        return pre=== "light" ? "dark" : "light";
    })


    }
    return (
        <div style={{
            backgroundColor: theme === "dark" ? "black" : "white",
            color: theme === "light" ? "black" : "white",
             height: "100vh",
             
        }}>
            <h1>Toggle Button</h1>
            <button onClick={handleTheme} >Switch Theme </button>
        </div>
    )
}