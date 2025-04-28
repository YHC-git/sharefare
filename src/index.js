import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';  // Ensure you're importing the correct CSS file
import App from './App';  // Import your App component

// Create a root element for rendering
const root = ReactDOM.createRoot(document.getElementById('root'));

// Render your App component inside the root element
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
