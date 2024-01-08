import "../styles/LoginSignup.scss";
import imgSvg from "../assets/code.svg";
import logo from "../assets/logo.png";
import axios from "axios";
import { useState } from "react";

const Signup = ({ isDeveloper }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("");

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };
  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };
  const handleRoleChange = (e) => {
    setRole(e.target.value);
  };
  const URL = isDeveloper
    ? "http://localhost:8080/api/user/developer/signup"
    : "http://localhost:8080/api/user/learner/signup";
  const sendData = async () => {
    const body = isDeveloper
      ? { email: email, password: password, role: role }
      : { email: email, password: password };
    try {
      const token = localStorage.getItem("token");
      const response = await axios.post(URL, body, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      });

      const newToken = response.data.token;
      localStorage.setItem("token", newToken);
      console.log(URL);
      console.log(response.data);
    } catch (error) {
      console.error("Error occurred:", error);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    sendData();
    setEmail("");
    setPassword("");
    setRole("");
  };

  return (
    <>
      <div className="container">
        <section className="display">
          <img src={imgSvg} alt="code svg" className="svg" />
          <h2 className="heading">
            Get started with <span className="rainbow-text">Dezire</span>
          </h2>
          <p className="para">
            Be part of Dezire! Explore curated YouTube videos 📹, comprehensive
            notes 🗒️, and a vibrant community 🤝. Join us in exploring,
            learning, and connecting today! 🚀
          </p>
        </section>
        <section className="form">
          <img src={logo} alt="dezires logo" />
          <form onSubmit={handleSubmit}>
            <input
              type="email"
              placeholder="Email"
              className="input-email"
              value={email}
              onChange={handleEmailChange}
            />
            <input
              type="password"
              placeholder="Password"
              className="input-password"
              value={password}
              onChange={handlePasswordChange}
            />
            {isDeveloper && (
              <input
                type="text"
                placeholder="Your role"
                value={role}
                onChange={handleRoleChange}
              />
            )}

            <button type="submit" className="btn">
              Signup
            </button>
          </form>
        </section>
      </div>
    </>
  );
};

export default Signup;
