import React, { useState } from "react";
import "../styles/LoginSignup.scss";
import imgSvg from "../assets/code.svg";
import logo from "../assets/logo.png";
import { useLogin } from "../hooks/useLogin";
import {useNavigate} from 'react-router-dom';
import useAuthContext from "../hooks/useAuthContext";

const Login = ({ isDeveloper }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { login, error, isLoading } = useLogin();
  const {user} = useAuthContext();
  const navigate = useNavigate();

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };
 
  const handleSubmit = async (e) => {
    e.preventDefault();

    await login(email, password, isDeveloper);
    setEmail("");
    setPassword("");
    navigate("/developer")
  };

  return (
    <div className="container">
      <section className="display">
        <img src={imgSvg} alt="code svg" className="svg" />
        <h2 className="heading">
          Get started with <span className="rainbow-text">Dezire</span>
        </h2>
        <p className="para">
          Be part of Dezire! Explore curated YouTube videos 📹, comprehensive
          notes 🗒️, and a vibrant community 🤝. Join us in exploring, learning,
          and connecting today! 🚀
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

          <button to={`/developer/${user?.developer?._id}/`} type="submit" className="btn" disabled={isLoading}>
            {isLoading ? "Logging in..." : "Login"}
          </button>
          {error && <div className="error-message">{error}</div>}
        </form>
      </section>
    </div>
  );
};

export default Login;
