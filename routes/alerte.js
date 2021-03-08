const express = require('express');
const router = express.Router();

const alerteCtrl = require('../controllers/alerte');

router.get('/', alerteCtrl.getAllAlerte);
router.get('/:dev_id', alerteCtrl.getAlerteByDevID);
router.put('/:dev_id', alerteCtrl.setAlerte);

module.exports = router;