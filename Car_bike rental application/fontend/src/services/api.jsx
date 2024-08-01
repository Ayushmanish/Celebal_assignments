import axios from 'axios';

const API = axios.create({
    baseURL: 'http://localhost:5000/api',
});

API.interceptors.request.use((req) => {
    const userInfo = localStorage.getItem('userInfo');
    if (userInfo) {
        req.headers.Authorization = `Bearer ${JSON.parse(userInfo).token}`;
    }
    return req;
});

export const registerUser = (data) => API.post('/users/register', data);
export const loginUser = (data) => API.post('/users/login', data);
export const getVehicles = () => API.get('/vehicles');
export const createBooking = (data) => API.post('/bookings', data);
export const verifyPayment = (data) => API.post('/bookings/verify', data);
export const getUserBookings = () => API.get('/bookings/mybookings');

export default API;
