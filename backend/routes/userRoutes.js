const express = require("express");
const router = express.Router();
const {
  DeveloperSignup,
  DeveloperLogin,
  LearnerLogin,
  LearnerSignup,
} = require("../controllers/userController");

router.post("/developer/signup", DeveloperSignup);
router.post("/developer/login", DeveloperLogin);
router.post("/learner/sighup", LearnerSignup);
router.post("/learner/login", LearnerLogin);

module.exports = router;
