import { Link } from "react-router-dom";
// import {useEffect,useState} from 'react';
// import axios from 'axios';

const SecondNavbar = () => {
// const [data, setData] = useState({})

// useEffect(()=>{
//     const getData = async () => {
//         try{
//             const response = axios.get('')
//         }
//     }
// })
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
        <span>sanchityadav2005@gmail.com</span>
        <button className="btn">Logout</button>
      </div>
    </nav>
  );
};

export default SecondNavbar;
