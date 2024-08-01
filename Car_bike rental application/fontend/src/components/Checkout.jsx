import React, { useState } from 'react';
import { createOrder, verifyPayment } from '../services/razorpay';
import { createBooking } from '../services/api';

function Checkout({ history }) {
    const [duration, setDuration] = useState(1);
    const vehicle = JSON.parse(localStorage.getItem('selectedVehicle'));
    const user = JSON.parse(localStorage.getItem('userInfo'));

    const handleCheckout = async () => {
        const amount = vehicle.price * duration * 100;
        const order = await createOrder(amount);
        const options = {
            key: process.env.RAZORPAY_KEY,
            amount: order.amount,
            currency: 'INR',
            name: 'Car/Bike Rental',
            description: `Rental for ${vehicle.model}`,
            order_id: order.id,
            handler: async (response) => {
                const paymentData = {
                    razorpay_order_id: response.razorpay_order_id,
                    razorpay_payment_id: response.razorpay_payment_id,
                    razorpay_signature: response.razorpay_signature,
                };
                const verification = await verifyPayment(paymentData);
                if (verification.status === 'ok') {
                    const bookingData = {
                        user: user._id,
                        vehicle: vehicle._id,
                        startDate: new Date(),
                        endDate: new Date(Date.now() + duration * 24 * 60 * 60 * 1000),
                        totalPrice: vehicle.price * duration,
                    };
                    await createBooking(bookingData);
                    history.push('/bookings');
                }
            },
        };
        const razorpay = new window.Razorpay(options);
        razorpay.open();
    };

    return (
        <div className="checkout-container">
            <h2>Checkout</h2>
            <p>{`Vehicle: ${vehicle.model}`}</p>
            <p>{`Price: $${vehicle.price}/day`}</p>
            <input
                type="number"
                min="1"
                value={duration}
                onChange={(e) => setDuration(e.target.value)}
            />
            <button onClick={handleCheckout}>Proceed to Pay</button>
        </div>
    );
}

export default Checkout;
