import "../styles/diversion.scss";
import coding from "../assets/coding.png";
import learner from "../assets/student.png";
import { Link } from "react-router-dom";


const Diversion = ({toggle}) => {
  return (
    <div className="container">
      <section className="developer-section">
        <div>
          <img
            src={coding}
            alt="icon for developer"
            className="developer-icon"
          />
          <h3>Sign up or Login as developer</h3>
          <Link to="/developer/signup" className="signup" onSubmit={toggle}>
            signup
          </Link>
          <Link to="/developer/login" className="login" onSubmit={toggle}>
            login
          </Link>
        </div>
      </section>
      <section className="learner-section">
        <div>
          <img src={learner} alt="icon for learners" className="learner-icon" />
          <h3>Sign up or Login as learner</h3>
          <Link to="/learner/signup" className="signup">
            signup
          </Link>
          <Link to="/learner/login" className="login">
            login
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Diversion;
