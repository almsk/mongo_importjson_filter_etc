const mongoose = require('mongoose');

const AirqualitySchema = new mongoose.Schema({
    aqm: {
        r3000: Number,
        r5000: Number,
        noxevent: Number,
        r2000: Number,
        coevent: Number
    },
    qps: {
        system_time: String,
        qps_time: String,
        latitude: String,
        longitude: String
    }
});

module.exports = mongoose.model('Aqmpoint', AirqualitySchema);