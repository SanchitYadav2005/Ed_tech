import "../styles/navbar.scss";

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
          <a className="nav-link" href="/notes">
            Notes
          </a>
        </li>
      </ul>
      <a href="/signup" className="btn">Register</a>
    </nav>
    </>
  );
}

export default Navbar;
