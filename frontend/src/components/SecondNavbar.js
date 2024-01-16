import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import "../styles/secondNav.scss";

const SecondNavbar = () => {
  const [data, setData] = useState({});

  useEffect(() => {
    const getData = async () => {
      try {
        const gotData = await localStorage.getItem("user");
        if (gotData) {
          const userData = JSON.parse(gotData);
          setData(userData);
        }
      } catch (error) {
        console.error("Error parsing user data:", error);
      }
    };

    getData();
  }, []);

  return (
    <nav className="nav">
      <ul className="nav-list">
        <li className="navitem">
          <Link className="navlink" to="/">
            Home
          </Link>
        </li>
        <li className="navitem">
          <Link className="navlink" to="/videos">
            Videos
          </Link>
        </li>
        <li className="navitem">
          <Link className="navlink" to="/notes">
            Notes
          </Link>
        </li>
      </ul>
      <div className="button-container">
        <Link className="link" to="/user/developer/profile">
          {data.developer && data.developer.email}
        </Link>
        <button className="button">Logout</button>
      </div>
    </nav>
  );
};

export default SecondNavbar;
