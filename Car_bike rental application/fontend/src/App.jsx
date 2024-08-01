import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './components/Login';
import Registration from './components/Registration';
import VehicleList from './components/VehicleList';
import Checkout from './components/Checkout';
import BookingHistory from './components/BookingHistory';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/login" element={Login} />
          <Route path="/register" element={Registration} />
          <Route path="/vehicles" element={VehicleList} />
          <Route path="/checkout" element={Checkout} />
          <Route path="/bookings" element={BookingHistory} />
          <Route path="/" element={<VehicleList />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
