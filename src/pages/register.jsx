import React, { useState } from "react";

const Register = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");  

  async function register(ev){
    ev.preventDefault()
    fetch('http://localhost:3000/register',{
      method: 'POST',
      body: JSON.stringify({username,password}),
      headers:{'Content-Type' : 'application/json'},
    } )
  }

  return (
    <form className="register" onSubmit={register}>
      <h1>Register</h1>
      <input
        type="text"
        placeholder="username"
        value={username}
        onChange={ev => setUsername(ev.target.value)}/>

      <input 
        type="password" 
        placeholder="password" 
        value={password} 
        onChange={ev => setPassword(ev.target.value)}/>

      <button className="button-45">Register</button>
    </form>
  );
};

export default Register;
