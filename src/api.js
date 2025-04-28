const API_BASE_URL = "http://127.0.0.1:5000"; // Replace with your deployed backend URL later

export const registerUser = async (userData) => {
  const response = await fetch(`${API_BASE_URL}/register`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(userData),
  });
  return response.json();
};

export const loginUser = async (credentials) => {
  const response = await fetch(`${API_BASE_URL}/login`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(credentials),
  });
  return response.json();
};

export const createRide = async (rideData) => {
  const response = await fetch(`${API_BASE_URL}/rides`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(rideData),
  });
  return response.json();
};

export const getRides = async () => {
  const response = await fetch(`${API_BASE_URL}/rides`);
  return response.json();
};

export const bookRide = async (rideId, userId, seats = 1) => {
  const response = await fetch(`${API_BASE_URL}/rides/${rideId}/book`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ user_id: userId, seats_booked: seats }),
  });
  return response.json();
};