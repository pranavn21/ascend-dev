import React, { useState } from "react";
import './Login.css';
const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();
    console.log("Email:", email);
    console.log("Password:", password);
  };

  return (
    <div>
      <form action="/submit" method="POST" name="loginForm">
        <label htmlFor="name">Name:</label>
        <input type="text" id="name" name="name" required />
        <br /><br />

        <label htmlFor="email">Email:</label>
        <input type="email" id="email" name="email" required />
        <br /><br />

        <label htmlFor="password">Password:</label>
        <input type="password" id="password" name="password" required />
        <br /><br />

        <button type="submit">Submit</button>
      </form>
      <h2>
        If you do not have an account register here
      </h2>
      <form>
      <label htmlFor="name">Name:</label>
        <input type="text" id="name" name="name" required />
        <br /><br />

        <label htmlFor="email">Email:</label>
        <input type="email" id="email" name="email" required />
        <br /><br />

        <label htmlFor="password">Password:</label>
        <input type="password" id="password" name="password" required />
        <br /><br />

        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Login;
