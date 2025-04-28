import React, { useState } from 'react';
import { createRide } from '../services/rideService';  // Make sure to create this service to handle the API call

const CreateRidePage = () => {
    const [origin, setOrigin] = useState('');
    const [destination, setDestination] = useState('');
    const [date, setDate] = useState('');
    const [time, setTime] = useState('');
    const [availableSeats, setAvailableSeats] = useState(1);
    const [pricePerSeat, setPricePerSeat] = useState('');
    const [error, setError] = useState('');
    const [success, setSuccess] = useState(false);

    const handleCreateRide = async (e) => {
        e.preventDefault();
        const rideData = {
            origin,
            destination,
            date,
            time,
            available_seats: availableSeats,
            price_per_seat: pricePerSeat
        };

        const response = await createRide(rideData);

        if (response.message === 'Ride created successfully!') {
            setSuccess(true);  // Display success message
        } else {
            setError(response.message);  // Show error if ride creation fails
        }
    };

    return (
        <div className="create-ride-container">
            <h2>Create Ride</h2>
            <form onSubmit={handleCreateRide}>
                <div className="input-group">
                    <input
                        type="text"
                        placeholder="Origin"
                        value={origin}
                        onChange={(e) => setOrigin(e.target.value)}
                    />
                </div>
                <div className="input-group">
                    <input
                        type="text"
                        placeholder="Destination"
                        value={destination}
                        onChange={(e) => setDestination(e.target.value)}
                    />
                </div>
                <div className="input-group">
                    <input
                        type="date"
                        value={date}
                        onChange={(e) => setDate(e.target.value)}
                    />
                </div>
                <div className="input-group">
                    <input
                        type="time"
                        value={time}
                        onChange={(e) => setTime(e.target.value)}
                    />
                </div>
                <div className="input-group">
                    <input
                        type="number"
                        placeholder="Available Seats"
                        value={availableSeats}
                        onChange={(e) => setAvailableSeats(e.target.value)}
                    />
                </div>
                <div className="input-group">
                    <input
                        type="number"
                        placeholder="Price per Seat"
                        value={pricePerSeat}
                        onChange={(e) => setPricePerSeat(e.target.value)}
                    />
                </div>
                <button type="submit">Create Ride</button>
            </form>
            {error && <p className="error">{error}</p>}
            {success && <p className="success">Ride created successfully!</p>}
        </div>
    );
};

export default CreateRidePage;
