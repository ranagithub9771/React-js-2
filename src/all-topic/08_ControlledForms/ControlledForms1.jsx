import { useState } from "react";

const ControlledForms1 = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [course, setCourse] = useState("");

  const handleCourse = (e) =>{
    setCourse(e.target.value);
  }
  const handleUsername = (e) => {
    // console.log(e);/
    setUsername(e.target.value);
  };

  const handleEmail = (e) => {
    setEmail(e.target.value);
  };
  const handlePassword = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newUser = { username, email, password , course};
    console.log(newUser);
    
    // console.log("username ", username);
    // console.log("email ", email);
    // console.log("password ", password);
  };

  return (
    <>
      <h1> Learn Controlled Fomrs</h1>

      <form onSubmit={handleSubmit}>
        <label htmlFor="username">Username :</label>
        <input
          type="text"
          id="username"
          name="username"
          onChange={handleUsername}
          value={username}
          placeholder="Enter your username"
        />
        <br></br>
        <br></br>
        <label htmlFor="email">Email :</label>
        <input
          type="email"
          id="email"
          name="email"
          value={email}
          onChange={handleEmail}
          placeholder="Enter your email"
        />
        <br></br>
        <br></br>
        <label htmlFor="password">Password :</label>
        <input
          type="password"
          id="password"
          name="password"
          value={password}
          onChange={handlePassword}
          placeholder="Enter your password"
        />
        <br></br>
        <br></br>
        <label htmlFor="course">Course :</label>
        <select name="course" id="course" value={course} onChange={handleCourse}>
            <option value="" disabled selected>Select a course</option>
            <option value="react">React</option>
            <option value="angular">Angular</option>
            <option value="vue">Vue</option>
        </select>

        <br></br>
        <br></br>
        <button type="submit">Submit</button>
      </form>
    </>
  );
};

export default ControlledForms1;


// input - text, email , password, radio checkbox, number 