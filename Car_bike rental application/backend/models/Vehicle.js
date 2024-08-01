const mongoose = require('mongoose');

const vehicleSchema = mongoose.Schema({
    type: {
        type: String,
        required: true,
    },
    model: {
        type: String,
        required: true,
    },
    availability: {
        type: Boolean,
        default: true,
    },
    price: {
        type: Number,
        required: true,
    },
}, {
    timestamps: true,
});

const Vehicle = mongoose.model('Vehicle', vehicleSchema);

module.exports = Vehicle;
