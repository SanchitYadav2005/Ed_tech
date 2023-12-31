import axios from "axios";
import { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { TypeAnimation } from "react-type-animation";
// import MainImg from "../assets/Programmer.gif";
import { Fade, Slide } from "react-awesome-reveal";
import "../styles/home.scss";
import notes from "../assets/main-section-imgs/notes.jpg";
import interaction from "../assets/main-section-imgs/interaction.jpg";
import community from "../assets/main-section-imgs/community.jpg";
import videos from "../assets/main-section-imgs/videos.jpg";
import growth from "../assets/main-section-imgs/growth.jpg";

const Home = () => {
  const [serverResponse, setServerResponse] = useState();
  useEffect(() => {
    try {
      const fetchData = async () => {
        const response = await axios.get("/");
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
                <img src={notes} alt="notes" />
                <p className="notes-para">
                  {serverResponse.notesText}
                </p>
              </div>
            </Slide>
            <div className="contain-others">
              <div>
                <img
                  src={videos}
                  alt="best videos"
                  style={{ height: "265px" }}
                />
                <p>
                  Our video collection isn't just about quantity; it's about
                  quality. Carefully curated, these videos complement your
                  learning, providing dynamic explanations and visual
                  demonstrations that bring theories to life. From engaging
                  animations to real-world applications, each video is chosen to
                  reinforce your understanding and make learning enjoyable.
                </p>
              </div>
              <div>
                <img src={community} alt="vast community" />
                <p>
                  Dezire isn't just a platform; it's a community buzzing with
                  energy! Connect with fellow learners, mentors, and educators
                  who share your enthusiasm for knowledge. Exchange ideas, seek
                  guidance, and collaborate on projects. Engage in forums, live
                  discussions, and workshops that foster a culture of mutual
                  support and growth.
                </p>
              </div>
              <div>
                <img src={interaction} alt="interactive engagement" />
                <p>
                  Learning is a collaborative journey at Dezire. Join live study
                  sessions, interactive quizzes, and engaging webinars hosted by
                  subject matter experts. Participate in group challenges or
                  create study circles to tackle complex topics together. Engage
                  in healthy debates that broaden perspectives and deepen your
                  understanding.
                </p>
              </div>
            </div>
            <Slide direction="left">
              <div className="second-container">
                <img src={growth} alt="continuous growth" />
                <p>
                  At Dezire, we believe in nurturing lifelong learners. Access
                  resources beyond conventional textbooks, such as blogs,
                  podcasts, and research papers, curated to spark curiosity and
                  inspire intellectual curiosity. Develop critical thinking
                  skills and embrace a growth mindset that extends far beyond
                  the classroom.
                </p>
              </div>
            </Slide>
          </main>
        </Fade>
        <Footer />
      </>
    );
  }
};

export default Home;
