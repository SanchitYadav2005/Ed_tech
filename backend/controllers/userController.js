const Developer = require("../schemas/developerSchema");
const Learner = require("../schemas/learnerSchema");
const jwt = require("jsonwebtoken");
// const File = require("../schemas/fileSchema");

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
    // const file = await File.findById
    const token = createToken(developer._id)
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
// made this function because we are using it in two exported funtions
async function findUser(id) {
  const developerUser = await Developer.findById(id);
  const learnerUser = await Learner.findById(id);
  return { developerUser, learnerUser };
}
module.exports.getUserById = async (req, res) => {
  const { id } = req.params;
  try {
    let user = undefined;
    const { developerUser, learnerUser } = await findUser(id);
    if (developerUser) {
      user = developerUser.populate("notes")
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
