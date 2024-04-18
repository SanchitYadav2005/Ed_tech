import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { TypeAnimation } from "react-type-animation";
import { Fade } from "react-awesome-reveal";
import "../styles/home.scss";
import videos from "../assets/videos.jpg";
import notes from "../assets/notes.jpg";
import community from "../assets/community.jpg";
import interaction from "../assets/interaction.jpg";
import growth from "../assets/growth.jpg";
import programmer from "../assets/Programmer.gif";

const Home = () => {
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
              src={programmer}
              className="main-gif"
              alt="a person who is coding"
            />
          </div>
        </Fade>
      </header>
      <Fade>
        <main className="about-section">
          <div className="container">
            <img src={notes} alt="notes" />
            <p className="notes-para">
              Our video collection isn't just about quantity; it's about
              quality. Carefully curated, these videos complement your learning,
              providing dynamic explanations and visual demonstrations that
              bring theories to life. From engaging animations to real-world
              applications, each video is chosen to reinforce your understanding
              and make learning enjoyable. 🎬✨📚
            </p>
          </div>

          <div className="container">
            <img src={videos} alt="videos" />
            <p className="notes-para">
              Our notes aren't just summaries; they're your roadmap to academic
              excellence. Comprehensive, yet easy to digest, they break down
              intricate subjects into bite-sized, understandable chunks. With
              visuals, examples, and organized structures, these notes cater to
              various learning styles, ensuring you grasp concepts effectively.
              📝📚🌟🎨
            </p>
          </div>

          <div className="container">
            <img src={community} alt="community" />
            <p className="notes-para">
              Dezire isn't just a platform; it's a community buzzing with
              energy! Connect with fellow learners, mentors, and educators who
              share your enthusiasm for knowledge. Exchange ideas, seek
              guidance, and collaborate on projects. Engage in forums, live
              discussions, and workshops that foster a culture of mutual support
              and growth. 🌐🤝📚🚀✨
            </p>
          </div>

          <div className="container">
            <img src={interaction} alt="interaction" />
            <p className="notes-para">
              Learning is a collaborative journey at Dezire. Join live study
              sessions, interactive quizzes, and engaging webinars hosted by
              subject matter experts. Participate in group challenges or create
              study circles to tackle complex topics together. Engage in healthy
              debates that broaden perspectives and deepen your understanding.
              🎓📚🤝🌐🧠
            </p>
          </div>

          <div className="container">
            <img src={growth} alt="growth" />
            <p className="notes-para">
              At Dezire, we believe in nurturing lifelong learners. Access
              resources beyond conventional textbooks, such as blogs, podcasts,
              and research papers, curated to spark curiosity and inspire
              intellectual growth. Develop critical thinking skills and embrace
              a growth mindset that extends far beyond the classroom.
              📚🔍🎙️📝🌱🧠
            </p>
          </div>
        </main>
      </Fade>
      <Fade>
        <section className="lower-section">
          <h2 className="lower-heading">
            Get started with <span className="rainbow-text">Dezire</span>
          </h2>
          <p className="lower-para">
            Be part of Dezire! Explore curated YouTube videos 📹, comprehensive
            notes 🗒️, and a vibrant community 🤝. Join us in exploring,
            learning, and connecting today! 🚀
          </p>
        </section>
      </Fade>
      <Fade>
        <Footer />
      </Fade>
    </>
  );
};

export default Home;
