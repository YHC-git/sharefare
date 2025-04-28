// src/components/Navbar.jsx
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="flex items-center justify-between bg-blue-600 p-4 text-white">
      <div className="text-2xl font-bold">
        ShareFare
      </div>
      <div className="space-x-4">
        <Link to="/" className="hover:underline">
          Home
        </Link>
        <Link to="/login" className="hover:underline">
          Login
        </Link>
        <Link to="/register" className="hover:underline">
          Register
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;
