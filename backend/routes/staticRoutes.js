const express = require('express')
const router = express.Router();
const {staticControl} = require('../controllers/staticController')

router.get('', staticControl)


module.exports = router;