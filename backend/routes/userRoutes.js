const express = require("express");
const router = express.Router();
const {
  DeveloperSignup,
  DeveloperLogin,
  LearnerLogin,
  LearnerSignup,
  getUserById,
  updateDeveloper,
  updateLearner,
  deleteUser
} = require("../controllers/userController");

router.post("/developer/signup", DeveloperSignup);
router.post("/developer/login", DeveloperLogin);
router.post("/learner/signup", LearnerSignup);
router.post("/learner/login", LearnerLogin);
router.get("/:id/dashboard", getUserById);
router.put("/develope/:id/dashboard", updateDeveloper);
router.put("/learner/:id/dashboard", updateLearner);
router.post("/:id/delete", deleteUser)

module.exports = router;
