import React from "react";
import Home from "./pages/Home";
import Diversion from "./pages/Diversion";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import FilePage from "./pages/FilePage";
import { Routes, Route } from "react-router-dom";
import { useState } from "react";
import useAuthContext from "./hooks/useAuthContext";

function App() {
  const [isDeveloper, toggleDeveloper] = useState(true);
  const { state } = useAuthContext();

  const toggle = () => {
    toggleDeveloper((prevIsDeveloper) => !prevIsDeveloper);
  };
  console.log(state.user?.developer?._id);
  return (
    <React.Fragment>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/register"
          element={<Diversion togleDeveloper={toggle} />}
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
        <Route path={`/developer/:id/`} element={<FilePage />} />
      </Routes>
    </React.Fragment>
  );
}

export default App;
