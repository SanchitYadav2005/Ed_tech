import "../styles/navbar.scss";
import logoImg from "../assets/logo.png";

function Navbar() {
  return (
    <nav className="navbar">
      <img src={logoImg} className="logo-img" alt="logo-display" />
      <ul className="nav">
        <li className="nav-item">
          <a className="nav-link" href="/">
            Home
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/about">
            About
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/contact">
            Contact
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/contact">
            Notes
          </a>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
