import React, { useState } from 'react';
import { registerUser, loginUser } from './services/api'; // Import API functions

const App = () => {
  const [userData, setUserData] = useState({ email: '', password: '' });
  const [responseMessage, setResponseMessage] = useState('');

  // Handle user registration
  const handleRegister = async () => {
    const response = await registerUser(userData);
    setResponseMessage(response.message || "Registration failed");
  };

  // Handle user login
  const handleLogin = async () => {
    const response = await loginUser(userData);
    setResponseMessage(response.message || "Login failed");
  };

  return (
    <div>
      <h1>ShareFare App</h1>
      <input
        type="email"
        placeholder="Email"
        value={userData.email}
        onChange={(e) => setUserData({ ...userData, email: e.target.value })}
      />
      <input
        type="password"
        placeholder="Password"
        value={userData.password}
        onChange={(e) => setUserData({ ...userData, password: e.target.value })}
      />
      <button onClick={handleRegister}>Register</button>
      <button onClick={handleLogin}>Login</button>

      <p>{responseMessage}</p>
    </div>
  );
};

export default App;
