const mongoose = require('mongoose');

const dataTSchema = mongoose.Schema({
    app_id: { type: String, required: true },
    dev_id: { type: String, required: true },
    timestamp: { type: Number , required: true},
    value: { type: Number , required: true }
});

module.exports = mongoose.model('DataT', dataTSchema);