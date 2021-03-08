const express = require('express');
const router = express.Router();

const dataTCtrl = require('../controllers/dataT');

router.get('/', dataTCtrl.getAllDataT);
router.get('/:dev_id', dataTCtrl.getAllDataTByDevId);
router.get('/hours/:dev_id', dataTCtrl.getHoursDataTByDevId);
router.get('/day/:dev_id', dataTCtrl.getDayDataTByDevId);
router.get('/week/:dev_id', dataTCtrl.getWeekDataTByDevId);
router.get('/month/:dev_id', dataTCtrl.getMonthDataTByDevId);
router.get('/year/:dev_id', dataTCtrl.getYearDataTByDevId);

module.exports = router;