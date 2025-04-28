import axios from 'axios';

const API_URL = 'http://localhost:5000/api/';  // Your backend API base URL

// Register a user
export const register = async (userData) => {
    try {
        const response = await axios.post(API_URL + 'register', userData);
        return response.data;
    } catch (error) {
        return { message: error.response ? error.response.data.message : 'Error registering user' };
    }
};

// Login a user
export const login = async (credentials) => {
    try {
        const response = await axios.post(API_URL + 'login', credentials);
        if (response.data.user_id) {
            // Store token in localStorage on successful login
            localStorage.setItem('token', response.data.token);
        }
        return response.data;
    } catch (error) {
        return { message: error.response ? error.response.data.message : 'Error logging in' };
    }
};

// Get token from localStorage
export const getToken = () => {
    return localStorage.getItem('token');
};

// Set the token in the request header for authenticated requests
export const setAuthHeader = () => {
    const token = getToken();
    if (token) {
        axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
    }
};

// Log out the user
export const logout = () => {
    localStorage.removeItem('token');
    delete axios.defaults.headers.common['Authorization'];
};
