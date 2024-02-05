import React, { useState } from "react";
import "../styles/LoginSignup.scss";
import imgSvg from "../assets/code.svg";
import logo from "../assets/logo.png";
import { useLogin } from "../hooks/useLogin";
import { useNavigate } from "react-router-dom";
import useAuthContext from "../hooks/useAuthContext";
import { useShowPassword } from "../hooks/useShowPassword";

const Login = ({ isDeveloper }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { login, error, isLoading } = useLogin();
  const { show, toggle } = useShowPassword();
  const { user } = useAuthContext();
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
    // navigate("/developer");
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
            type={show ? "text" : "password"}
            placeholder="Password"
            className="input-password"
            value={password}
            onChange={handlePasswordChange}
          />
          {show ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              data-name="Layer 1"
              viewBox="0 0 24 24"
              id="eye-slash"
              onClick={toggle}
              className="icon"
            >
              <path
                fill="#6563FF"
                d="M10.94,6.08A6.93,6.93,0,0,1,12,6c3.18,0,6.17,2.29,7.91,6a15.23,15.23,0,0,1-.9,1.64,1,1,0,0,0-.16.55,1,1,0,0,0,1.86.5,15.77,15.77,0,0,0,1.21-2.3,1,1,0,0,0,0-.79C19.9,6.91,16.1,4,12,4a7.77,7.77,0,0,0-1.4.12,1,1,0,1,0,.34,2ZM3.71,2.29A1,1,0,0,0,2.29,3.71L5.39,6.8a14.62,14.62,0,0,0-3.31,4.8,1,1,0,0,0,0,.8C4.1,17.09,7.9,20,12,20a9.26,9.26,0,0,0,5.05-1.54l3.24,3.25a1,1,0,0,0,1.42,0,1,1,0,0,0,0-1.42Zm6.36,9.19,2.45,2.45A1.81,1.81,0,0,1,12,14a2,2,0,0,1-2-2A1.81,1.81,0,0,1,10.07,11.48ZM12,18c-3.18,0-6.17-2.29-7.9-6A12.09,12.09,0,0,1,6.8,8.21L8.57,10A4,4,0,0,0,14,15.43L15.59,17A7.24,7.24,0,0,1,12,18Z"
              ></path>
            </svg>
          ) : (
            <svg
              className="icon"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              id="eye"
              onClick={toggle}
            >
              <path
                fill="#6563FF"
                d="M21.92,11.6C19.9,6.91,16.1,4,12,4S4.1,6.91,2.08,11.6a1,1,0,0,0,0,.8C4.1,17.09,7.9,20,12,20s7.9-2.91,9.92-7.6A1,1,0,0,0,21.92,11.6ZM12,18c-3.17,0-6.17-2.29-7.9-6C5.83,8.29,8.83,6,12,6s6.17,2.29,7.9,6C18.17,15.71,15.17,18,12,18ZM12,8a4,4,0,1,0,4,4A4,4,0,0,0,12,8Zm0,6a2,2,0,1,1,2-2A2,2,0,0,1,12,14Z"
              ></path>
            </svg>
          )}

          <button
            to={`/developer/${user?.developer?._id}/`}
            type="submit"
            className="btn"
            disabled={isLoading}
          >
            {isLoading ? "Logging in..." : "Login"}
          </button>
          {error && <div className="error-message">{error}</div>}
        </form>
      </section>
    </div>
  );
};

export default Login;
