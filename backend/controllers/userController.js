const Developer = require("../schemas/developerSchema");
const Learner = require("../schemas/learnerSchema");
const jwt = require("jsonwebtoken");

const createToken = (_id) => {
  return jwt.sign({ _id }, process.env.SECRET, { expiresIn: "3d" });
};
// login & signup controller for developers.
module.exports.DeveloperSignup = async (req, res) => {
  const { email, password, role } = req.body;
  try {
    const developer = await Developer.signup(email, password, role);
    const token = createToken(developer._id);
    res
      .status(200)
      .json({ message: "created a user as developer", developer, token });
  } catch (error) {
    res.status(401).json({ message: error.message });
  }
};

module.exports.DeveloperLogin = async (req, res) => {
  const { email, password } = req.body;
  try {
    const developer = await Developer.login(email, password);
    const token = createToken(developer._id);
    res
      .status(200)
      .json({ message: "logged in successfully", developer, token });
  } catch (error) {
    res.status(401).json({ message: error.message });
  }
};

// login and signup for learner
module.exports.LearnerSignup = async (req, res) => {
  try {
    const { email, password } = req.body;
    const learner = await Learner.signup(email, password);
    const token = createToken(learner._id);
    res
      .status(200)
      .json({ message: "created user as learner", learner, token });
  } catch (error) {
    res.status(401).json({ message: error.message });
  }
};

module.exports.LearnerLogin = async (req, res) => {
  try {
    const { email, password } = req.body;
    const learner = await Learner.login(email, password);
    const token = createToken(learner._id);
    res.status(200).json({ message: "logged in successfully", learner, token });
  } catch (error) {
    res.status(401).json({ message: error.message });
  }
};

//finding user

module.exports.getUserById = async (req, res) => {
  const { id } = req.params;
  try {
    let user = undefined;
    if (await Developer.findById(id)) {
      user = await Developer.findById(id);
    } else {
      user = await Learner.findById(id);
    }
    res.status(200).json({ message: "user has been send", user });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};
