const asyncHandler = require('express-async-handler');
const Booking = require('../models/Booking');
const Razorpay = require('razorpay');
const crypto = require('crypto');

// Create new booking
const createBooking = asyncHandler(async (req, res) => {
    const { user, vehicle, startDate, endDate, totalPrice } = req.body;

    const booking = new Booking({
        user,
        vehicle,
        startDate,
        endDate,
        totalPrice,
    });

    const createdBooking = await booking.save();
    res.status(201).json(createdBooking);
});

// Verify payment
const verifyPayment = asyncHandler(async (req, res) => {
    const { razorpay_order_id, razorpay_payment_id, razorpay_signature } = req.body;

    const shasum = crypto.createHmac('sha256', process.env.RAZORPAY_SECRET);
    shasum.update(`${razorpay_order_id}|${razorpay_payment_id}`);
    const digest = shasum.digest('hex');

    if (digest === razorpay_signature) {
        const booking = await Booking.findById(razorpay_order_id);
        booking.isPaid = true;
        booking.paidAt = Date.now();
        await booking.save();
        res.json({ status: 'ok' });
    } else {
        res.status(400).json({ status: 'failed' });
    }
});

// Fetch user's booking history
const getUserBookings = asyncHandler(async (req, res) => {
    const bookings = await Booking.find({ user: req.user._id }).populate('vehicle');
    res.json(bookings);
});

module.exports = { createBooking, verifyPayment, getUserBookings };
