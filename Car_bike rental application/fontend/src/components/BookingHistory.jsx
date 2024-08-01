import React, { useEffect, useState } from 'react';
import { getUserBookings } from '../services/api';

function BookingHistory() {
    const [bookings, setBookings] = useState([]);

    useEffect(() => {
        const fetchBookings = async () => {
            const { data } = await getUserBookings();
            setBookings(data);
        };
        fetchBookings();
    }, []);

    return (
        <div className="booking-history-container">
            <h2>Booking History</h2>
            <div className="booking-list">
                {bookings.map((booking) => (
                    <div key={booking._id} className="booking-item">
                        <h3>{booking.vehicle.model}</h3>
                        <p>{`Start Date: ${new Date(booking.startDate).toLocaleDateString()}`}</p>
                        <p>{`End Date: ${new Date(booking.endDate).toLocaleDateString()}`}</p>
                        <p>{`Total Price: $${booking.totalPrice}`}</p>
                        <p>{`Paid: ${booking.isPaid ? 'Yes' : 'No'}`}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default BookingHistory;
