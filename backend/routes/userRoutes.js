const express = require("express");
const router = express.Router();
const {
  DeveloperSignup,
  DeveloperLogin,
  LearnerLogin,
  LearnerSignup,
  getUserById
} = require("../controllers/userController");

router.post("/developer/signup", DeveloperSignup);
router.post("/developer/login", DeveloperLogin);
router.post("/learner/signup", LearnerSignup);
router.post("/learner/login", LearnerLogin);
router.get("/:id/dashboard", getUserById)

module.exports = router;
