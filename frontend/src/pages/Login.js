import "../styles/LoginSignup.scss";
import imgSvg from "../assets/code.svg";
import { useState } from "react";

const Login = () => {
    
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };
  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
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
        <form className="form">
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
          <button className="btn">Login</button>
        </form>
      </div>
    </>
  );
};

export default Login;
