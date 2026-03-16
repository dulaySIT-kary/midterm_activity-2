import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav style={{ padding: "10px", backgroundColor: "#f0f0f0" }}>
      <Link to="/home" style={{ margin: "0 10px" }}>Home</Link>
      <Link to="/register" style={{ margin: "0 10px" }}>Register</Link>
    </nav>
  );
}