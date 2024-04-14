import "../styles/navbar.scss";
import { Link } from "react-router-dom";
import useAuthContext from "../hooks/useAuthContext";
import { useLogOut } from "../hooks/useLogout";
import Hamburger from "./Hamburger";
import { useState } from "react";

function Navbar() {
  const { state } = useAuthContext();
  const { logout } = useLogOut();
  const [hamburgerOpen, setHamburgerOpen] = useState(false);
  const toggleHamburger = () => {
    setHamburgerOpen(!hamburgerOpen);
  };
  const handleClick = () => {
    logout();
  };
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
            <a className="nav-link" href="/videos">
              Videos
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/notes">
              Notes
            </a>
          </li>
        </ul>
        {state.user ? (
          <Link className="btn" onClick={handleClick}>
            Logout
          </Link>
        ) : (
          <Link to="/register" className="btn">
            Register
          </Link>
        )}
      </nav>
      <div className="hamburger" onClick={toggleHamburger}>
        <Hamburger isOpen={hamburgerOpen} />
      </div>
    </>
  );
}

export default Navbar;
