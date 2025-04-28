import React, { useState, useEffect } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import { bookRide } from '../services/rideService';

const BookRidePage = () => {
    const { rideId } = useParams();
    const [seats, setSeats] = useState(1);
    const [error, setError] = useState('');
    const [success, setSuccess] = useState(false);
    const history = useHistory();

    const handleBookRide = async () => {
        const userId = 1;  // Assuming the logged-in user's ID is 1, this should come from user session/context
        const response = await bookRide(rideId, userId, seats);
        
        if (response.message === 'Ride booked successfully!') {
            setSuccess(true);
            setTimeout(() => history.push('/rides'), 2000); // Redirect after success
        } else {
            setError(response.message);
        }
    };

    return (
        <div className="book-ride-container">
            <h2>Book Ride</h2>
            {error && <p className="error">{error}</p>}
            {success && <p className="success">Ride booked successfully!</p>}
            <div>
                <label htmlFor="seats">Seats to book:</label>
                <input
                    type="number"
                    id="seats"
                    value={seats}
                    onChange={(e) => setSeats(e.target.value)}
                    min="1"
                />
            </div>
            <button onClick={handleBookRide}>Confirm Booking</button>
        </div>
    );
};

export default BookRidePage;
