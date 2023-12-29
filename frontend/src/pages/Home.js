import axios from "axios";
import { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { TypeAnimation } from "react-type-animation";
import MainImg from "../assets/Programmer.gif";
import "../styles/home.scss";

const Home = () => {
  const [serverResponse, setServerResponse] = useState();
  useEffect(() => {
    axios.get("/").then((response) => {
      setServerResponse(response);
    });
  }, []);
  if (serverResponse) {
    return (
      <>
        <Navbar />
        <header>
          <div className="typing-animator">
            <TypeAnimation
              sequence={[
                "Dezire to be a develper",
                1000,
                "Dezire to be a hacker",
                1000,
                "Dezire to be in technology",
                1000,
              ]}
              wrapper="span"
              speed={200}
              style={{
                fontSize: "5em",
                display: "inline-block",
                marginTop: "1.5em",
                marginLeft: "1em",
                fontWeight: "bolder",
              }}
              repeat={Infinity}
              className="typing"
            />
          </div>
          <div className="img-container">
            <img
              src={MainImg}
              className="main-gif"
              alt="a person who is coding"
            />
          </div>
        </header>
        <Footer />
      </>
    );
  }
};

export default Home;
