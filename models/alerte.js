const mongoose = require('mongoose');

const alerteSchema = mongoose.Schema({
    app_id: { type: String, required: true },
    dev_id: { type: String, required: true, unique: true },
    trigger_min: {type: Boolean , required: true},
    trigger_max: {type: Boolean , required: true},
    min_value: {type: Number, required: false},
    max_value: {type: Number, required: false},
    est_encore_sous_min: {type: Boolean , required: true},
    est_encore_dessus_max: {type: Boolean , required: true},
});

module.exports = mongoose.model('Alerte', alerteSchema);