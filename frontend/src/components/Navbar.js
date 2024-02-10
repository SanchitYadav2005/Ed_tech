import "../styles/navbar.scss";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <>
      <nav className="navbar">
        <h1 className="rainbow-text">DEZIRE</h1>
        <ul className="nav">
          <li className="nav-item">
            <a className="nav-link" href="/">
              Home
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/contact">
              Contact
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/notes">
              Notes
            </a>
          </li>
        </ul>
        <Link to="/register" className="btn">
          Register
        </Link>
      </nav>
    </>
  );
}

export default Navbar;
