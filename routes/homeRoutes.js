const express = require('express');

const aboutController = require('../controller/homeController.js');

const router = express.Router();

router.get('/', aboutController.getAboutPage);

module.exports = router;