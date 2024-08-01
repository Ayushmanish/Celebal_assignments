import React, { useEffect, useState } from 'react';
import { getVehicles } from '../services/api';

function VehicleList({ history }) {
    const [vehicles, setVehicles] = useState([]);

    useEffect(() => {
        const fetchVehicles = async () => {
            const { data } = await getVehicles();
            setVehicles(data);
        };
        fetchVehicles();
    }, []);

    const handleBook = (vehicle) => {
        localStorage.setItem('selectedVehicle', JSON.stringify(vehicle));
        history.push('/checkout');
    };

    return (
        <div className="vehicle-list-container">
            <h2>Vehicles</h2>
            <div className="vehicle-list">
                {vehicles.map((vehicle) => (
                    <div key={vehicle._id} className="vehicle-item">
                        <h3>{vehicle.model}</h3>
                        <p>{vehicle.type}</p>
                        <p>{`$${vehicle.price}/day`}</p>
                        <button onClick={() => handleBook(vehicle)}>Book Now</button>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default VehicleList;
