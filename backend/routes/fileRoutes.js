const express = require('express')
const router = express.Router();
const {fileContoller} = require('../controllers/fileController')

router.post('/deveoper/file', fileContoller)

module.exports = router;