// src/pages/Register.js
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Register() {
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const [confirmPass, setConfirmPass] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (pass !== confirmPass) {
      alert("Passwords do not match");
      return;
    }

    const data = {
      user_name: name,
      email: email,
      password: pass
    };

    try {
      const res = await fetch("https://worksheet-auth.mashupstack.com/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data)
      });

      if (!res.ok) {
        alert("Registration Failed");
        return;
      }

      alert("Registration Successful");
      navigate("/login");

    } catch (error) {
      console.error(error);
      alert("Something went wrong");
    }
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2>Register</h2>
      <form onSubmit={handleSubmit} style={formStyle}>
        
        <input
          type="text"
          placeholder="Name"
          required
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

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

        <input
          type="password"
          placeholder="Confirm Password"
          required
          value={confirmPass}
          onChange={(e) => setConfirmPass(e.target.value)}
        />

        <button type="submit">Register</button>
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
