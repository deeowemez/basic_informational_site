const express = require('express');

const aboutController = require('/home/aian/repos/basic-informational-site/controller/aboutController.js');

const router = express.Router();

router.get('/', aboutController.getAboutPage);

module.exports = router;