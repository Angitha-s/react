// src/pages/Login.js
import { useState } from "react";

export default function Login() {
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();

    const data = {
      email: email,
      password: pass
    };

    try {
      const res = await fetch("https://worksheet-auth.mashupstack.com/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data)
      });

      const json = await res.json();

      if (!res.ok) {
        alert("Login Failed");
        return;
      }

      alert("Successfully Logged In");
      console.log("TOKEN:", json.token);

    } catch (error) {
      console.error(error);
      alert("Something went wrong");
    }
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2>Login</h2>
      <form onSubmit={handleLogin} style={formStyle}>
        
        <input
          type="email"
          placeholder="Email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          type="password"
          placeholder="Password"
          required
          value={pass}
          onChange={(e) => setPass(e.target.value)}
        />

        <button type="submit">Login</button>
      </form>
    </div>
  );
}

const formStyle = {
  display: "flex",
  flexDirection: "column",
  gap: "10px",
  maxWidth: "300px"
};
