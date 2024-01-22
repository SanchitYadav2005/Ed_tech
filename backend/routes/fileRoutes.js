const express = require("express");
const router = express.Router();
const { uploadFile } = require("../controllers/fileController");

router.post("/developer/file", uploadFile);

module.exports = router;
