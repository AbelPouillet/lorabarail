const DataT = require('../models/dataT');

exports.getAllDataT = (req, res, next) => {
  DataT.find().then(
    (dataTs) => {
      res.status(200).json(dataTs);
    }
  ).catch(
    (error) => {
      res.status(400).json({
        error: error
      });
    }
  );
};

exports.getAllDataTByDevId = (req, res, next) => {
  DataT.find({ dev_id: req.params.dev_id }).sort({ timestamp: 1 }).then(
    (dataTs) => {
      res.status(200).json(dataTs);
    }
  ).catch(
    (error) => {
      res.status(400).json({
        error: error
      });
    }
  );
}
exports.getHoursDataTByDevId = (req, res, next) => {
  let startTime = Date.now() - 3600000;
  DataT.find({ dev_id: req.params.dev_id, timestamp: { $gte: startTime } }).sort({ timestamp: 1 }).then(
    (dataTs) => {
      res.status(200).json(dataTs);
    }
  ).catch(
    (error) => {
      res.status(400).json({
        error: error
      });
    }
  );
}
exports.getDayDataTByDevId = (req, res, next) => {
  let startTime = Date.now() - 86400000;
  DataT.find({ dev_id: req.params.dev_id, timestamp: { $gte: startTime } }).sort({ timestamp: 1 }).then(
    (dataTs) => {
      res.status(200).json(dataTs);
    }
  ).catch(
    (error) => {
      res.status(400).json({
        error: error
      });
    }
  );
}
exports.getWeekDataTByDevId = (req, res, next) => {
  let startTime = Date.now() - 604800000;
  DataT.find({ dev_id: req.params.dev_id, timestamp: { $gte: startTime } }).sort({ timestamp: 1 }).then(
    (dataTs) => {
      res.status(200).json(dataTs);
    }
  ).catch(
    (error) => {
      res.status(400).json({
        error: error
      });
    }
  );
}
exports.getMonthDataTByDevId = (req, res, next) => {
  let currentDate = new Date();
  currentDate.setDate(1);
  let startTime = currentDate.getTime();
  DataT.find({ dev_id: req.params.dev_id, timestamp: { $gte: startTime } }).sort({ timestamp: 1 }).then(
    (dataTs) => {
      res.status(200).json(dataTs);
    }
  ).catch(
    (error) => {
      res.status(400).json({
        error: error
      });
    }
  );
}
exports.getYearDataTByDevId = (req, res, next) => {
  let currentDate = new Date();
  currentDate.setDate(1);
  currentDate.setMonth(1);
  let startTime = currentDate.getTime();
  DataT.find({ dev_id: req.params.dev_id, timestamp: { $gte: startTime } }).sort({ timestamp: 1 }).then(
    (dataTs) => {
      res.status(200).json(dataTs);
    }
  ).catch(
    (error) => {
      res.status(400).json({
        error: error
      });
    }
  );
}
