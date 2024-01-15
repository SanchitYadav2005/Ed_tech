import "../styles/LoginSignup.scss";
import imgSvg from "../assets/code.svg";
import logo from "../assets/logo.png";
import { useState } from "react";
import { useSignup } from "../hooks/useSignup";
import {useNavigate} from 'react-router-dom';

const Signup = ({ isDeveloper }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("");
  const { signUp, error, isLoading } = useSignup();
  const navigate = useNavigate();

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleRoleChange = (e) => {
    setRole(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const body = isDeveloper
      ? { email: email, password: password, role: role }
      : { email: email, password: password };
    await signUp(body, isDeveloper);
    setEmail("");
    setPassword("");
    setRole("");
    navigate("/developer");
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

          <button type="submit" className="btn" disabled={isLoading}>
            Signup
          </button>
          {error && <div>{error}</div>}
        </form>
      </section>
    </div>
  );
};

export default Signup;
