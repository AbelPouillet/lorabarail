const mongoose = require('mongoose');

const capteurSchema = mongoose.Schema({
    app_id: { type: String, required: true },
    dev_id: { type: String, required: true, unique: true },
    hardware_serial: { type: String, required: true },
    port: { type: Number, required: true },
    counter: { type: Number, required: false },
    battery_current_level: { type: Number, required: false },
    last_value: {type: Number, required: false},
    last_value_time : {type: Number, required: false}
});

module.exports = mongoose.model('Capteur', capteurSchema);