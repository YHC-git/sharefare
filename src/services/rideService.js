import axios from 'axios';

const API_URL = 'http://localhost:5000/api';  // Update to your Flask backend API URL

// Create a new ride
export const createRide = async (rideData) => {
    try {
        const response = await axios.post(`${API_URL}/rides`, rideData);
        return response.data;
    } catch (error) {
        return { message: error.response?.data?.message || 'Error creating ride' };
    }
};

// Get all rides
export const getRides = async () => {
    try {
        const response = await axios.get(`${API_URL}/rides`);
        return response.data;
    } catch (error) {
        return { message: error.response?.data?.message || 'Error fetching rides' };
    }
};

// Book a ride
export const bookRide = async (rideId, userId, seats) => {
    try {
        const response = await axios.post(`${API_URL}/rides/${rideId}/book`, {
            user_id: userId,
            seats_booked: seats,
        });
        return response.data;
    } catch (error) {
        return { message: error.response?.data?.message || 'Error booking ride' };
    }
};
