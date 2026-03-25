import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <nav className="site-nav">
      <NavLink className="brand brand-link" to="/">
        FlatmateAI
      </NavLink>
      <div className="nav-links">
        <NavLink
          className={({ isActive }) => (isActive ? "nav-link active" : "nav-link")}
          to="/"
        >
          Home
        </NavLink>
        <NavLink
          className={({ isActive }) => (isActive ? "nav-link active" : "nav-link")}
          to="/about"
        >
          About
        </NavLink>
        <NavLink
          className={({ isActive }) => (isActive ? "nav-link active" : "nav-link")}
          to="/contact"
        >
          Contact
        </NavLink>
      </div>
    </nav>
  );
}

export default Navbar;
