import { Link } from "react-router-dom";
import { useEffect, useState } from 'react';

const SecondNavbar = () => {
  const [data, setData] = useState({});

  useEffect(() => {
    const getData = async () => {
      // Use try-catch to handle potential errors while parsing JSON
      try {
        const gotData = await localStorage.getItem("user");
        if (gotData) {
          // Parse the string to an object
          const userData = JSON.parse(gotData);
          setData(userData);
        }
      } catch (error) {
        console.error("Error parsing user data:", error);
      }
    };

    getData();
  }, []); // Add an empty dependency array

  return (
    <nav className="navbar">
      <ul className="nav">
        <li className="nav-item">
          <Link className="nav-link" to="/">
            Home
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/videos">
            Videos
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/notes">
            Notes
          </Link>
        </li>
      </ul>
      <div className="container">
        <span>{data.developer && data.developer.email}</span>
        <button className="btn">Logout</button>
      </div>
    </nav>
  );
};

export default SecondNavbar;
