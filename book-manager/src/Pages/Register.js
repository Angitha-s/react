import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function Register() {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleRegister = async (e) => {
    e.preventDefault();

    const data = {
      user_name: name,
      email: email,
      password: password
    };

    try {
      const response = await fetch("https://worksheet-auth.mashupstack.com/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data)
      });

      const result = await response.json();

      if (response.ok) {
        alert("Registration Successful");
        navigate("/login");
      } else {
        setError(result.message || "Registration Failed");
      }

    } catch (err) {
      setError("Network Error");
    }
  };

  return (
    <div style={{ padding: "30px" }}>
      <h2>Register</h2>

      {error && <p style={{ color: "red" }}>{error}</p>}

      <form onSubmit={handleRegister}>
        <div>
          <label>Name: </label><br />
          <input 
            type="text" 
            value={name}
            onChange={(e) => setName(e.target.value)} 
            required 
          />
        </div>

        <div>
          <label>Email: </label><br />
          <input 
            type="email" 
            value={email}
            onChange={(e) => setEmail(e.target.value)} 
            required 
          />
        </div>

        <div>
          <label>Password: </label><br />
          <input 
            type="password" 
            value={password}
            onChange={(e) => setPassword(e.target.value)} 
            required 
          />
        </div>

        <button type="submit" style={{ marginTop: "10px" }}>
          Register
        </button>
      </form>
    </div>
  );
}

export default Register;
