import React, { useEffect, useState } from 'react';
import { getRides } from '../services/rideService';
import { useHistory } from 'react-router-dom';

const RidesListPage = () => {
    const [rides, setRides] = useState([]);
    const [error, setError] = useState('');
    const history = useHistory();

    useEffect(() => {
        const fetchRides = async () => {
            const response = await getRides();
            if (response.rides) {
                setRides(response.rides);
            } else {
                setError(response.message);
            }
        };

        fetchRides();
    }, []);

    const handleBookRide = (rideId) => {
        history.push(`/rides/${rideId}/book`);
    };

    return (
        <div className="rides-list-container">
            <h2>Available Rides</h2>
            {error && <p className="error">{error}</p>}
            <div className="rides-list">
                {rides.map((ride) => (
                    <div className="ride-card" key={ride.id}>
                        <h3>{ride.origin} to {ride.destination}</h3>
                        <p>Date: {ride.date}</p>
                        <p>Time: {ride.time}</p>
                        <p>Price: ${ride.price_per_seat}</p>
                        <button onClick={() => handleBookRide(ride.id)}>Book Ride</button>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default RidesListPage;
