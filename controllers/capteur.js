const Capteur = require('../models/capteur');

exports.getAllCapteur = (req, res, next) => {
    Capteur.find().then(
        (capteurs)=> {
            res.status(200).json(capteurs);
        }
    ).catch(
        (error) => {
          res.status(400).json({
            error: error
          });
        }
      );
};
