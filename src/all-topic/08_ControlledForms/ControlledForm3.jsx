import React, { useState } from "react";

function ControlledForm3() {
  let [isChecked, setIsChecked] = useState(false);
  let [username, setUsername] = useState("");
  let [email, setEmail] = useState("");
 let [password, setPassword] = useState("");

let handleUsername = (e) =>{
    setUsername(e.target.value);
}

let handleEmail = (e) =>{
    setEmail(e.target.value);
}
let handlePassword = (e) =>{
    setPassword(e.target.value);
    // console.log(e);
}

let handleChecked = (e) =>{
    setIsChecked(e.target.checked);
    
}

let handleSubmit =(e)=>{
    e.preventDefault();
    const newUser = {username, email, password,Married:isChecked};
    console.log(newUser);
    // console.log("Married :",isChecked);

}

  return (
    <>
      <h1>Controlled Form </h1>

      <form onSubmit={handleSubmit}>
        <label htmlFor="username">Username : </label>
        <input
          type="text"
          id="username"
          name="username"
          placeholder="Enter your username"
          value={username}
          onChange={handleUsername}
        />
        <br></br>
        <br></br>
        <label htmlFor="email">Email : </label>
        <input
          type="email"
          id="email"
          name="email"
          placeholder="Enter your email"
           value={email}
          onChange={handleEmail}
        />
        <br></br>
        <br></br>
        <label htmlFor="password">Password : </label>
        <input
          type="password"
          id="password"
          name="password"
          placeholder="Enter your password"
           value={password}
          onChange={handlePassword}
        />
        <br></br>
        <br></br>
         <label htmlFor="married"> Married : </label>
        
          <input
            type="checkbox"
            checked={isChecked}
            onChange={handleChecked}
          />
           {/* <p>Checked: {isChecked.toString()}</p> */}
         
        <br></br>
        <br></br>

         {/* Gender:
      <label htmlFor="male"> Option 1
      </label>
        <input
          type="radio"
          value="male"
          checked={selectedOption === "male"}
          onChange={(e) => setSelectedOption(e.target.value)}
        />
       

      <label htmlFor="female"> Option 2
      </label>
        <input
          type="radio"
          value="female"
          checked={selectedOption === "female"}
          onChange={}
        />
       
      <p>Selected: {selectedOption}</p> */}
      
        <button> Submit </button>
      </form>
    </>
  );
}

export default ControlledForm3;
