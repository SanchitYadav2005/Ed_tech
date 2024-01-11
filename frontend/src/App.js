import Home from "./pages/Home";
import Diversion from "./pages/Diversion";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import { Routes, Route } from "react-router-dom";
import { useState } from "react";

function App() {
  const [isDeveloper, toggleDeveloper] = useState(true);

  const toggle = () => {
    toggleDeveloper((prevState) => !prevState);
  };

  return (
    <>
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
      </Routes>
    </>
  );
}

export default App;
