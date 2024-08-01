import Razorpay from 'razorpay';

export const createOrder = async (amount) => {
    const res = await fetch('http://localhost:5000/api/payments/order', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ amount }),
    });
    const data = await res.json();
    return data;
};

export const verifyPayment = async (paymentData) => {
    const res = await fetch('http://localhost:5000/api/payments/verify', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(paymentData),
    });
    const data = await res.json();
    return data;
};
