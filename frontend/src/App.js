import Home from "./pages/Home";
import Diversion from "./pages/Diversion";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={ <Home />}/>
        <Route path="/register" element={<Diversion />} />
        <Route path="/developer/login" element={<Login/>}/>
        <Route path="/learner/login" element={<Login/>}/>
        <Route path="/developer/signup" element={<Signup/>}/>
        <Route path="/learner/signup" element={<Signup/>}/>
      </Routes>
     
    </>
  );
}

export default App;
