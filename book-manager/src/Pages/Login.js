import React, { useState } from "react";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();

    const data = {
      email: email,
      password: password
    };

    try {
      const response = await fetch("https://worksheet-auth.mashupstack.com/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data)
      });

      const result = await response.json();

      if (response.ok) {
        console.log("Received Token:", result.token);  // Print token to console
        alert("Successfully Logged In");
      } else {
        setError(result.message || "Login failed");
      }

    } catch (err) {
      setError("Network Error");
    }
  };

  return (
    <div style={{ padding: "30px" }}>
      <h2>Login</h2>

      {error && <p style={{ color: "red" }}>{error}</p>}

      <form onSubmit={handleLogin}>
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
          Login
        </button>
      </form>
    </div>
  );
}

export default Login;
