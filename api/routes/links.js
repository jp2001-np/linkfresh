
const express = require('express');
const router = express.Router();
const { scanWebsite } = require('../controllers/linksController');

router.post('/scan', scanWebsite);

module.exports = router;
