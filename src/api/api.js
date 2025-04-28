import axios from "axios";

const API = axios.create({
  baseURL: "http://127.0.0.1:5000",  // Flask running locally
});

// Register a new user
export const registerUser = (userData) => API.post("/register", userData);

// Login
export const loginUser = (loginData) => API.post("/login", loginData);

// Create Ride
export const createRide = (rideData) => API.post("/rides", rideData);

// Get Rides
export const getRides = () => API.get("/rides");

// Book Ride
export const bookRide = (rideId, bookingData) => API.post(`/rides/${rideId}/book`, bookingData);
