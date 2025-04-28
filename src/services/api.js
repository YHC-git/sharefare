const API_BASE_URL = "https://your-flask-app.herokuapp.com";  // Change to your backend URL

// Register a user
export const registerUser = async (userData) => {
  const response = await fetch(`${API_BASE_URL}/register`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(userData),
  });
  return response.json();
};

// Login a user
export const loginUser = async (credentials) => {
  const response = await fetch(`${API_BASE_URL}/login`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(credentials),
  });
  return response.json();
};

// Create a ride
export const createRide = async (rideData) => {
  const response = await fetch(`${API_BASE_URL}/rides`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(rideData),
  });
  return response.json();
};

// Get all rides
export const getRides = async () => {
  const response = await fetch(`${API_BASE_URL}/rides`);
  return response.json();
};

// Book a ride
export const bookRide = async (rideId, userId, seats = 1) => {
  const response = await fetch(`${API_BASE_URL}/rides/${rideId}/book`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ user_id: userId, seats_booked: seats }),
  });
  return response.json();
};
