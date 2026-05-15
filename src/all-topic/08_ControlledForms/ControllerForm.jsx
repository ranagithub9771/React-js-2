import React, { useState } from 'react'

export default function ControllerForm() {
    const [username, setUsername] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

  const handleUsername = (e) =>{
    setUsername(e.target.value);
  }
  const handleEmail = (e) =>{
    setEmail(e.target.value);
  }
  const handlePassword = (e) =>{
    setPassword(e.target.value);
    console.log(e);
    
  }

  const handleSubmit = (e) =>{
    e.preventDefault();
    console.log("username ", username);
    console.log("email ", email);
    console.log("password ", password);
  }
  return (

    <>
    <h1>ControllerForm</h1>

    <form onSubmit={handleSubmit}>
        <label htmlFor="username">Username :</label>
        <input type="text" id="username" name="username" value={username} onChange={handleUsername} placeholder='Enter your username' />
        <br></br>
        <br></br>

        <label htmlFor="email">Email :</label>
        <input type="email" id="email" name="email" value={email} onChange={handleEmail} placeholder='Enter your email' />
        <br></br>
        <br></br>

        <label htmlFor="password">Password :</label>
        <input type="password" id="password" name="password" value={password} onChange={handlePassword} placeholder='Enter your password' />
        <br></br>
        <br></br>
        <button type="submit">Submit</button>

    </form>
    </>
  )
}
export default ControllerForm;