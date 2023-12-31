import axios from "axios";
import { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { TypeAnimation } from "react-type-animation";
import { Fade, Slide } from "react-awesome-reveal";
import "../styles/home.scss";

const Home = () => {
  const [serverResponse, setServerResponse] = useState();
  useEffect(() => {
    try {
      const fetchData = async () => {
        const response = await axios.get("http://localhost:8080/");
        setServerResponse(response.data);
      };
      fetchData();
    } catch (e) {
      throw Error(e.message);
    }
  }, []);
  if (serverResponse) {
    return (
      <>
        <Fade>
          <Navbar />
        </Fade>
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
          <Fade
            triggerOnce={true}
            cascade
            damping={0.1}
            delay={2}
            direction="left"
          >
            <div className="img-container">
              <img
                src={serverResponse.programmer}
                className="main-gif"
                alt="a person who is coding"
              />
            </div>
          </Fade>
        </header>
        <Fade>
          <main className="about-section">
            <Slide direction="right">
              <div className="container">
                <img src={serverResponse.notes} alt="notes" />
                <p className="notes-para">{serverResponse.notesText}</p>
              </div>
            </Slide>
            <div className="contain-others">
              <div>
                <img
                  src={serverResponse.videos}
                  alt="best videos"
                  style={{ height: "265px" }}
                />
                <p>{serverResponse.videosText}</p>
              </div>
              <div>
                <img src={serverResponse.community} alt="vast community" />
                <p>{serverResponse.communityText}</p>
              </div>
              <div>
                <img
                  src={serverResponse.interaction}
                  alt="interactive engagement"
                />
                <p>{serverResponse.interactionText}</p>
              </div>
            </div>
            <Slide direction="left">
              <div className="second-container">
                <img src={serverResponse.growth} alt="continuous growth" />
                <p>{serverResponse.growthText}</p>
              </div>
            </Slide>
          </main>
        </Fade>
        <Fade>
          <section className="lower-section">
            <h2 className="lower-heading">
              Get started with <span className="rainbow-text">Dezire</span>
            </h2>
            <p className="lower-para">
              Be part of Dezire! Explore curated YouTube videos 📹,
              comprehensive notes 🗒️, and a vibrant community 🤝. Join us in
              exploring, learning, and connecting today! 🚀
            </p>
          </section>
        </Fade>
        <Fade>
          <Footer />
        </Fade>
      </>
    );
  }
};

export default Home;
