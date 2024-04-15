import axios from "axios";
import { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { TypeAnimation } from "react-type-animation";
import { Fade} from "react-awesome-reveal";
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
            <div className="container">
              <img src={serverResponse.notes} alt="notes" />
              <p className="notes-para">{serverResponse.notesText}</p>
            </div>

            <div className="container">
              <img src={serverResponse.videos} alt="videos" />
              <p className="notes-para">{serverResponse.videosText}</p>
            </div>

            <div className="container">
              <img src={serverResponse.community} alt="community" />
              <p className="notes-para">{serverResponse.communityText}</p>
            </div>

            <div className="container">
              <img src={serverResponse.interaction} alt="interaction" />
              <p className="notes-para">{serverResponse.interactionText}</p>
            </div>

            <div className="container">
              <img src={serverResponse.growth} alt="growth" />
              <p className="notes-para">{serverResponse.growthText}</p>
            </div>
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
