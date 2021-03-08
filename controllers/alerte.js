const Alerte = require('../models/alerte');
var slcodec = require('../slcodec');
var request = require('request');
var ttn = require('ttn');
var appID = "tempsenlabt13";
var accessKey = "ttn-account-v2.w5afXsniTiZeMGgmo9nZ-dt5esPeJytIJhSPJ9ql_20";
exports.getAllAlerte = (req, res, next) => {
    Alerte.find().then(
        (alertes) => {
            res.status(200).json(alertes);
        }
    ).catch(
        (error) => {
            res.status(400).json({
                error: error
            });
        }
    );
};
exports.updateAlerte = (req, res, next) => {
    Alerte.findOne({ _id: req.body._id }).then(
        (alerte) => {
            //On récupère l'alerte éxistante 
            const newAlerte = new Alerte({
                app_id: alerte.app_id,
                dev_id: alerte.dev_id,
                trigger_min: req.body.trigger_min,
                trigger_max: req.body.trigger_min,
                min_value: req.body.trigger_min,
                max_value: req.body.trigger_min,
                est_encore_sous_min: false,
                est_encore_dessus_max: false,
            });

            if (alerte.trigger_max == false) {
                if (req.body.trigger_max == true) {
                    //On active l'alarme max

                }
            } else {
                if (req.body.trigger_max == false) {
                    //On désactive l'alarme max

                }
                else {
                    //On modifie l'alarme max
                }
            }
            if (alerte.trigger_min == false) {
                if (req.body.trigger_min == true) {
                    //On active l'alarme min
                }
            } else {
                if (req.body.trigger_min == false) {
                    //On désactive l'alarme min
                } else {
                    //On modifie l'alarme min
                }

            }
            //On la met à jour si la requete est bien passer
            newAlerte.updateOne({ _id: alerteDuCapteur._id }, alerteDuCapteur)
                .then((alerte) => {

                    console.log('Alerte MàJ');
                    res.status(200).json(alerte);

                }).catch(error => {
                    console.log(error);
                });
            res.status(200).json(alerte);
        }
    ).catch(
        (error) => {
            console.log(req.body)
            res.status(500).json({
                error: error
            });
        }
    )

}
exports.setAlerte = (req, res, next) => {
    const alerteAEncoder = {
        "id": "request_alarms_configuration",
        "parameters": [
            { "id": "measure_read_period", "value": 1 },
            { "id": "alarms_retransmission_number", "value": 0 },
            { "id": "temperature_highthreshold_activation", "value": req.body.trigger_max },
            { "id": "temperature_highthreshold_validation_duration", "value": 0 },
            { "id": "temperature_highthreshold_trigger", "value": req.body.max_value },
            { "id": "temperature_highthreshold_release", "value": req.body.max_value - 1 },
            { "id": "temperature_lowthreshold_activation", "value": req.body.trigger_min },
            { "id": "temperature_lowthreshold_validation_duration", "value": 0 },
            { "id": "temperature_lowthreshold_trigger", "value": req.body.min_value },
            { "id": "temperature_lowthreshold_release", "value": req.body.min_value + 1 }
        ]
    }
    var encodedRequest = slcodec("SenlabT").encode(alerteAEncoder);
    ttn.data(appID, accessKey)
        .then(function (client) {
            client.send(req.body.dev_id, encodedRequest.payload, encodedRequest.Fport);
            console.log('Requete envoyé :', encodedRequest);
        }).catch(function (error) {
            console.error("Error", error)
            process.exit(1)
        });
    Alerte.updateOne({ _id: req.body._id }, req.body).then(
        (alerte) => {
            res.status(200).json(alerte);
        }
    ).catch(
        (error) => {
            res.status(400).json({
                error: error
            });
        }
    );
}
exports.getAlerteByDevID = (req, res, next) => {
    Alerte.findOne({ dev_id: req.params.dev_id }).then(
        (alerte) => {
            res.status(200).json(alerte);
        }
    ).catch(
        (error) => {
            res.status(400).json({
                error: error
            });
        }
    );
}