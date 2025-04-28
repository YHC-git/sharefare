import React, { useState } from 'react';
import { register } from '../services/authService';
import { useHistory } from 'react-router-dom';

const SignupPage = () => {
    const [fullName, setFullName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [phone, setPhone] = useState('');
    const [error, setError] = useState('');
    const history = useHistory();

    const handleSignup = async (e) => {
        e.preventDefault();
        const newUser = { full_name: fullName, email, password, phone };

        const response = await register(newUser);

        if (response.message === 'User registered successfully') {
            history.push('/login');  // Redirect to Login page after successful signup
        } else {
            setError(response.message);  // Show error if registration fails
        }
    };

    return (
        <div>
            <h2>Sign Up</h2>
            <form onSubmit={handleSignup}>
                <input
                    type="text"
                    placeholder="Full Name"
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                />
                <input
                    type="email"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                <input
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                <input
                    type="text"
                    placeholder="Phone"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                />
                <button type="submit">Sign Up</button>
                {error && <p>{error}</p>}
            </form>
        </div>
    );
};

export default SignupPage;
