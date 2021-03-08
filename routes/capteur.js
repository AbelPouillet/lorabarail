const express = require('express');
const router = express.Router();

const capteurCtrl = require('../controllers/capteur');

router.get('/', capteurCtrl.getAllCapteur);

module.exports = router;