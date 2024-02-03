const express = require("express");
const router = express.Router();
const { uploadFile, getAllFiles } = require("../controllers/fileController");

router.post("/developer/file", uploadFile);
router.get("/files", getAllFiles)

module.exports = router;
