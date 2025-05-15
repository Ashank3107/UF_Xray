import React, { useState, useContext } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from './context/AuthContext';

const Signup = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const navigate = useNavigate();
  const [error, setError] = useState(null);
  const { login } = useContext(AuthContext); 

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);

   
    if (password !== confirmPassword) {
      setError('Passwords do not match.');
      return;
    }

    try {
      const response = await axios.post('/api/auth/signup', {
        username,
        email,
        password,
      });

      login(response.data.token);

      navigate('/'); 
    } catch (err) {
      if (err.response && err.response.data && err.response.data.message) {
        if (err.response.data.message === 'User already exists') {
          setError('An account with this email already exists.');
        } else {
          setError(err.response.data.message);
        }
      } else {
        setError('Signup failed. Please try again.');
      }
      console.error('Signup error:', err);
    }
  };

  return (
    <div className="background-gradient flex items-center justify-center min-h-screen">
      <div className="max-w-md w-full bg-white shadow-lg rounded-lg p-8 space-y-6">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-900">Create an Account</h2>
          <p className="text-gray-600">Join UF XRAY to securely scan your files and URLs</p>
        </div>
        <div id="signup-form">
          <h3 className="text-xl font-semibold text-gray-800 mb-4">Sign Up</h3>
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label htmlFor="signup-name" className="block text-gray-700">
                Full Name
              </label>
              <input
                type="text"
                id="signup-name"
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-600"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
              />
            </div>
            <div className="mb-4">
              <label htmlFor="signup-email" className="block text-gray-700">
                Email
              </label>
              <input
                type="email"
                id="signup-email"
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-600"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div className="mb-4">
              <label htmlFor="signup-password" className="block text-gray-700">
                Password
              </label>
              <input
                type="password"
                id="signup-password"
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-600"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
            <div className="mb-4">
              <label htmlFor="signup-confirm-password" className="block text-gray-700">
                Confirm Password
              </label>
              <input
                type="password"
                id="signup-confirm-password"
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-600"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                required
              />
            </div>
            {error && <p style={{ color: 'red' }}>{error}</p>}
            <button
              type="submit"
              className="w-full bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700 transition-colors"
            >
              Sign Up
            </button>
          </form>
        </div>
        <div className="text-center">
          <p className="text-gray-600">
            Already have an account?{' '}
            <a href="/login" className="text-indigo-600 hover:underline">
              Login
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Signup;