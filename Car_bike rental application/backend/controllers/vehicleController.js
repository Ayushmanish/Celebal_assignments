const asyncHandler = require('express-async-handler');
const Vehicle = require('../models/Vehicle');

// Fetch all vehicles
const getVehicles = asyncHandler(async (req, res) => {
    const vehicles = await Vehicle.find({});
    res.json(vehicles);
});

module.exports = { getVehicles };
