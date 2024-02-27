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
    const token = createToken(developer._id)
    res
      .status(200)
      .json({ message: "logged in successfully", developer, token });
  } catch (error) {
    res.status(401).json({ message: error.message });
  }
};
// updating developer infos
module.exports.updateDeveloper = async (req, res) => {
  const { id } = req.params;
  try {
    const developer = await Developer.findByIdAndUpdate(id, req.body);
    if (!developer) {
      return res.status(404).json({ message: "Developer not found" });
    }

    res
      .status(200)
      .json({ message: "Successfully updated details", developer });
  } catch (error) {
    console.error("Error updating developer:", error);

    // Handle specific Mongoose validation error
    if (error.name === "ValidationError") {
      return res
        .status(400)
        .json({ message: "Validation error", error: error.message });
    }

    res.status(500).json({ message: "Internal server error" });
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
// updating values for learner
module.exports.updateLearner = async (req, res) => {
  const { id } = req.params;
  try {
    const learner = await Learner.findByIdAndUpdate(id, req.body);
    if (!learner) {
      return res.status(404).json({ message: "Learner not found" });
    }
    res.status(200).json({ message: "user found", learner });
  } catch (error) {
    console.error("Error updating developer:", error);

    // Handle specific Mongoose validation error
    if (error.name === "ValidationError") {
      return res
        .status(400)
        .json({ message: "Validation error", error: error.message });
    }

    res.status(500).json({ message: "Internal server error" });
  }
};
//finding user
// made this function because we are using it in two exported funtions
async function findUser(id) {
  const developerUser = await Developer.findById(id).populate("author");
  const learnerUser = await Learner.findById(id);
  return { developerUser, learnerUser };
}
module.exports.getUserById = async (req, res) => {
  const { id } = req.params;
  try {
    let user = undefined;
    const { developerUser, learnerUser } = await findUser(id);
    if (developerUser) {
      user = developerUser;
    } else if (learnerUser) {
      user = learnerUser;
    } else {
      res.status(404).json({ message: "user not found" });
    }
    res.status(200).json({ message: "user has been sended", user });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};
// adding delete controller for developer and learner

module.exports.deleteUser = async (req, res) => {
  const { id } = req.params;
  const {developerUser, learnerUser} = await findUser(id)
  let user = undefined;
  try{
    if(developerUser){
      user = developerUser
      await Developer.findByIdAndDelete(id)
    }else if(learnerUser){
      user = learnerUser
      await Learner.findByIdAndDelete(id)
    }else{
      res.status(401).json({message: "no user found!"})
    }
    res.status(200).json({message: "user has been deleted", user})
  }catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};
