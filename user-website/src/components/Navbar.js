// src/components/Navbar.js
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav style={styles.nav}>
      <div style={styles.navContent}>
        <Link to="/register" style={styles.link}>Register</Link>
        <Link to="/login" style={styles.link}>Login</Link>
      </div>
    </nav>
  );
}

const styles = {
  nav: {
    background: "#222",
    padding: "15px"
  },
  navContent: {
    display: "flex",
    gap: "20px",
  },
  link: {
    color: "white",
    textDecoration: "none",
    fontSize: "18px",
    transition: "0.3s",
  }
};
