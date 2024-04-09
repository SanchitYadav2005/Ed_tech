import "../styles/navbar.scss";
import { Link } from "react-router-dom";
import useAuthContext from "../hooks/useAuthContext";
import { useLogOut } from "../hooks/useLogout";

function Navbar() {
  const { user } = useAuthContext();
  const { logout } = useLogOut();
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
        {user ? (
          <Link onClick={handleClick}>logout</Link>
        ) : (
          <Link to="/register" className="btn">
            Register
          </Link>
        )}
      </nav>
    </>
  );
}

export default Navbar;
