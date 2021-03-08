var ttn = require("ttn");
var appID = "tempsenlabt13";

//package à télécharger depuis https://support.sensing-labs.com/hc/en-us/articles/360027722091
let slcodec = require('./slcodec');

//var request = require('request');

const express = require('express');

const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const capteurRoutes = require('./routes/capteur');
const dataTRoutes = require('./routes/dataT');
const alerteRoutes = require('./routes/alerte');

var accessKey = "ttn-account-v2.w5afXsniTiZeMGgmo9nZ-dt5esPeJytIJhSPJ9ql_20";

const Capteur = require("./models/capteur");
const DataT = require("./models/dataT");
const Alerte = require("./models/alerte");

const http = require('http');


mongoose.connect('mongodb+srv://Abel:111520@cluster0.o98rq.mongodb.net/capteurs?retryWrites=true&w=majority',
  {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(() => console.log('Connexion à MongoDB réussie !'))
  .catch(() => console.log('Connexion à MongoDB échouée !'));

const app = express();
app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
  next();
});
app.use(bodyParser.json());

app.use((req, res, next) => {
  console.log('Requête reçue !');
  next();
});

app.use('/api/capteur', capteurRoutes);
app.use('/api/dataT', dataTRoutes);
app.use('/api/alerte', alerteRoutes);

//Nodemailer
var nodemailer = require('nodemailer');
const dataT = require("./models/dataT");
const { exit } = require("process");

var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'jcpouill@gmail.com',
    pass: 'JCPouill1!'
  },
  tls: {
    rejectUnauthorized: false
  }
});

ttn.data(appID, accessKey)
  .then(function (client) {
    client.on("event", function (devID, payload) {
      console.log(devID, 'response is ', payload);
    })
    client.on("uplink", function (devID, payload) {
      console.log("Received uplink from ", devID);
      //On recherche si le capteur éxiste en bdd
      Capteur.findOne({ dev_id: payload.dev_id })
        .then(
          capteur => {
            if (capteur == null) {
              //On créer le nouveau capteur en bdd
              const newCapteur = new Capteur({
                dev_id: payload.dev_id,
                app_id: payload.app_id,
                hardware_serial: payload.hardware_serial,
                port: payload.port,
                counter: payload.counter
              });
              newCapteur.save()
                .then(() => console.log("Capteur créer en bdd"))
                .catch(error => console.log(error));

            }
            const capteurObservee = capteur;
            Alerte.findOne({ dev_id: payload.dev_id })
              .then(
                alerte => {
                  if (alerte == null) {
                    // Puis on initialise l'alertes à false s'il elle n'éxiste pas en bdd
                    const newAlerte = new Alerte({
                      dev_id: payload.dev_id,
                      app_id: payload.app_id,
                      trigger_min: false,
                      trigger_max: false,
                      est_encore_sous_min: false,
                      est_encore_dessus_max: false,
                    });

                    newAlerte.save()
                      .then(() => console.log("Alerte créer en bdd"))
                      .catch(error => console.log(error));
                  }
                  const alerteDuCapteur = alerte;
                  // decode le payload en local
                  const deviceToDecode = {
                    FPort: payload.port,
                    payload: payload.payload_raw,
                    time: new Date()
                  }
                  const decodedSignal = slcodec("SenlabT").decode(deviceToDecode)
                  const measures = decodedSignal.measures
                  if (decodedSignal.id == 'datalog_transmission') {
                    measures.forEach(mesure => {
                      if (mesure.id == 'temperature') {
                        //On enregistre les mesures
                        const newDataT = new DataT({
                          app_id: payload.app_id,
                          dev_id: payload.dev_id,
                          timestamp: mesure.timestamp,
                          value: mesure.value
                        });
                        //Vérification pour alerte
                        if (alerteDuCapteur.trigger_max && mesure.value > alerteDuCapteur.max_value && alerteDuCapteur.est_encore_dessus_max == false) {
                          //sendMail pour max value dépasser
                          var mailOptions = {
                            from: 'jcpouill@gmail.com',
                            to: 'jcpouill@gmail.com',
                            subject: 'La valeur maximal de ' + capteurObservee.dev_id + ' est dépasser',
                            text: 'La valeur maximal de ' + capteurObservee.dev_id + ' de ' + alerteDuCapteur.max_value + 'c a été dépasser le ' + new Date(mesure.timestamp).toLocaleString()
                          }
                          transporter.sendMail(mailOptions, function (err, info) {
                            if (err) {
                              console.log(err);
                            } else {
                              console.log(info.response);
                            }
                          })
                          //Maj de l'alerte
                          alerteDuCapteur.est_encore_dessus_max = true;
                          alerteDuCapteur.updateOne({ _id: alerteDuCapteur._id }, alerteDuCapteur).then(console.log('Alerte MàJ')).catch(error => {
                            console.log(error);
                          });
                        }
                        if (alerteDuCapteur.trigger_max && mesure.value < alerteDuCapteur.max_value && alerteDuCapteur.est_encore_dessus_max == true) {
                          //sendMail pour max value retour en dessous
                          var mailOptions = {
                            from: 'jcpouill@gmail.com',
                            to: 'jcpouill@gmail.com',
                            subject: 'La valeur maximal de ' + capteurObservee.dev_id + ' est revenue à la normal',
                            text: 'La valeur maximal de ' + capteurObservee.dev_id + ' de ' + alerteDuCapteur.max_value + 'c est revenue à la normal le ' + new Date(mesure.timestamp).toLocaleString()
                          }
                          transporter.sendMail(mailOptions, function (err, info) {
                            if (err) {
                              console.log(err);
                            } else {
                              console.log(info.response);
                            }
                          })
                          //Maj de l'alerte
                          alerteDuCapteur.est_encore_dessus_max = false;
                          alerteDuCapteur.updateOne({ _id: alerteDuCapteur._id }, alerteDuCapteur).then(console.log('Alerte MàJ')).catch(error => {
                            console.log(error);
                          });
                        }
                        if (alerteDuCapteur.trigger_min && mesure.value < alerteDuCapteur.min_value && alerteDuCapteur.est_encore_sous_min == false) {
                          //sendMail pour min value dépasser
                          var mailOptions = {
                            from: 'jcpouill@gmail.com',
                            to: 'jcpouill@gmail.com',
                            subject: 'La valeur minimal de ' + capteurObservee.dev_id + ' est dépasser',
                            text: 'La valeur minimal de ' + capteurObservee.dev_id + ' de ' + alerteDuCapteur.min_value + 'c a été dépasser le ' + new Date(mesure.timestamp).toLocaleString()
                          }
                          transporter.sendMail(mailOptions, function (err, info) {
                            if (err) {
                              console.log(err);
                            } else {
                              console.log(info.response);
                            }
                          })
                          //Maj de l'alerte
                          alerteDuCapteur.est_encore_sous_min = true;
                          alerteDuCapteur.updateOne({ _id: alerteDuCapteur._id }, alerteDuCapteur).then(console.log('Alerte MàJ')).catch(error => {
                            console.log(error);
                          });
                        }
                        if (alerteDuCapteur.trigger_min && mesure.value > alerteDuCapteur.min_value && alerteDuCapteur.est_encore_sous_min == true) {
                          //sendMail pour min value retour au dessus
                          var mailOptions = {
                            from: 'jcpouill@gmail.com',
                            to: 'jcpouill@gmail.com',
                            subject: 'La valeur minimal de ' + capteurObservee.dev_id + ' est revenue au dessus',
                            text: 'La valeur minimal de ' + capteurObservee.dev_id + ' est revenue au dessus de ' + alerteDuCapteur.min_value + 'c le ' + new Date(mesure.timestamp).toLocaleString()
                          }
                          transporter.sendMail(mailOptions, function (err, info) {
                            if (err) {
                              console.log(err);
                            } else {
                              console.log(info.response);
                            }
                          })
                          //Maj de l'alerte
                          alerteDuCapteur.est_encore_sous_min = false;
                          alerteDuCapteur.updateOne({ _id: alerteDuCapteur._id }, alerteDuCapteur).then(console.log('Alerte MàJ')).catch(error => {
                            console.log(error);
                          });
                        }
                        newDataT.save()
                          .then(() => console.log("Mesure enregistré"))
                          .catch(error => console.log(error));
                      } else {
                        //On met à jour son compteur et le niveau de sa batterie ici
                        const newCapteur = new Capteur({
                          _id: capteur._id,
                          dev_id: payload.dev_id,
                          app_id: payload.app_id,
                          hardware_serial: payload.hardware_serial,
                          port: payload.port,
                          counter: payload.counter,
                          battery_current_level: mesure.value,
                          last_value: measures[9].value,
                          last_value_time: measures[9].timestamp
                        })
                        Capteur.updateOne({ _id: capteur._id }, newCapteur)
                          .then(() => console.log("Capteur màj"))
                          .catch(error => console.log(error));;
                      }
                    });
                  }
                  else {
                    //gestion des alertes direct du capteur
                    console.log('GOOOOOAL!!!', decodedSignal);
                    //sendMail pour max value dépasser
                    var mailOptions = {
                      from: 'jcpouill@gmail.com',
                      to: 'jcpouill@gmail.com',
                      subject: capteurObservee.dev_id + ' envoie un message ' + decodedSignal.id,
                      text: 'Message instantané du capteur ' + capteurObservee.dev_id + ' le ' + new Date(decodedSignal.events[0].timestamp).toLocaleString()
                    }
                    transporter.sendMail(mailOptions, function (err, info) {
                      if (err) {
                        console.log(err);
                      } else {
                        console.log(info.response);
                      }
                    })
                  }
                }
              )


          }).catch(error => {
            console.log(error);

          })
    })
  })
  .catch(function (error) {
    console.error("Error", error)
    process.exit(1)
  })

const server = http.createServer(app);

const errorHandler = error => {
  if (error.syscall !== 'listen') {
    throw error;
  }
  const address = server.address();
  const bind = typeof address === 'string' ? 'pipe ' + address : 'port: ' + port;
  switch (error.code) {
    case 'EACCES':
      console.error(bind + ' requires elevated privileges.');
      process.exit(1);
      break;
    case 'EADDRINUSE':
      console.error(bind + ' is already in use.');
      process.exit(1);
      break;
    default:
      throw error;
  }
};

/*server.on('error', errorHandler);
server.on('listening', () => {
  const address = server.address();
  const bind = typeof address === 'string' ? 'pipe ' + address : 'port ' + 3000;
  console.log('Listening on ' + bind);
});*/

server.listen(3000);