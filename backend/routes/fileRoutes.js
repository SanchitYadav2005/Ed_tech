const express = require("express");
const router = express.Router();
const {
  uploadFile,
  getAllFiles,
  getSingleFile,
  deleteFile,
  getAllLinks
} = require("../controllers/fileController");
const multer = require("multer");
const upload = multer({
  storage: multer.memoryStorage(),
  limits: {
    fileSize: 10 * 1024 * 1024 * 1024,
  },
});

router.post("/developer/:id/file", upload.single('file'), uploadFile);
router.get("/files", getAllFiles);
router.get("/files/links", getAllLinks);
router.get("/:id/file", getSingleFile);
router.delete("/:id/delete", deleteFile);

module.exports = router;
