import React, { useState } from "react";

function ControlledForm4() {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    let { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    console.log(localStorage);
    let existingUsers = JSON.parse(localStorage.getItem("users")) || [];
    existingUsers.push(formData);
    localStorage.setItem("users", JSON.stringify(existingUsers));

    alert("User Created ");

    setFormData({ username: "", email: "", password: "" });
  };

  return (
    <>
      <h1> Learn Controlled form </h1>
      <h4>handle multiple input using single state.</h4>

      <form onSubmit={handleSubmit}>
        <label htmlFor="username">Username : </label>
        <input
          name="username"
          id="username"
          type="text"
          value={formData.username}
          onChange={handleChange}
        />
        <br />
        <br />
        <label htmlFor="email">Email : </label>
        <input
          name="email"
          id="email"
          type="text"
          value={formData.email}
          onChange={handleChange}
        />
        <br />
        <br />

        <label htmlFor="password">Password : </label>
        <input
          name="password"
          id="password"
          type="password"
          value={formData.password}
          onChange={handleChange}
        />
        <br />
        <br />
        <button>Submit</button>
      </form>
    </>
  );
}

export default ControlledForm4;

// import { useState } from "react";

//   const handleChange = () => {};

//   return (

//   );
// };

// return ControlledForm4;
