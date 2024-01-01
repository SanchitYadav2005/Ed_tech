import Home from "./pages/Home";
import Diversion from "./pages/Diversion";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={ <Home />}/>
        <Route path="/register" element={<Diversion />} />
      </Routes>
     
    </>
  );
}

export default App;
