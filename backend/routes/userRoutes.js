const express = require("express");
const router = express.Router();
const {
  DeveloperSignup,
  DeveloperLogin,
  LearnerLogin,
  LearnerSignup,
  getUserById,
  deleteUser
} = require("../controllers/userController");

router.post("/developer/signup", DeveloperSignup);
router.post("/developer/login", DeveloperLogin);
router.post("/learner/signup", LearnerSignup);
router.post("/learner/login", LearnerLogin);
router.get("/:id/dashboard", getUserById);
router.post("/:id/delete", deleteUser)

module.exports = router;
