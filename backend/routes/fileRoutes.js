const express = require("express");
const router = express.Router();
const {
  uploadFile,
  getAllFiles,
  getSingleFile,
  deleteFile,
} = require("../controllers/fileController");
const multer = require("multer");
const upload = multer({ dest: "uploads/" });

router.post("/developer/:id/file", upload.single('file'), uploadFile);
router.get("/files", getAllFiles);
router.get("/:id/file", getSingleFile);
router.delete("/:id/delete", deleteFile);

module.exports = router;
