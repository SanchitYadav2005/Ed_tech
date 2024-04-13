import React, { useEffect, useState } from "react";
import Home from "./pages/Home";
import Diversion from "./pages/Diversion";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import FilePage from "./pages/FilePage";
import Notes from "./pages/Notes";
import Videos from "./pages/Videos";
import { Routes, Route, Navigate } from "react-router-dom";

function App() {
  const [isDeveloper, toggleDeveloper] = useState(true);
  const [token, setToken] = useState('');
  const toggle = () => {
    toggleDeveloper((prevState) => !prevState);
  };
  const getToken = () => {
    const storedToken = localStorage.getItem("token");
    if (storedToken) {
      setToken(storedToken);
    } else {
      console.log("No token found!");
    }
  };

  useEffect(() => {
    getToken();
  });

  return (
    <React.Fragment>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/register"
          element={<Diversion toggleDeveloper={toggle} />}
        />
        <Route
          path="/developer/login"
          element={<Login isDeveloper={isDeveloper} />}
        />
        <Route path="/learner/login" element={<Login />} />
        <Route
          path="/developer/signup"
          element={<Signup isDeveloper={isDeveloper} />}
        />
        <Route path="/learner/signup" element={<Signup />} />
        <Route
          path={`/developer/:id`}
          element={token ? <FilePage /> : <Navigate to={"/register"} />}
        />
        <Route
          path="/notes"
          element={token ? <Notes /> : <Navigate to={"/register"} />}
        />
        <Route
          path="/videos"
          element={token ? <Videos /> : <Navigate to={"/register"} />}
        />
      </Routes>
    </React.Fragment>
  );
}

export default App;
