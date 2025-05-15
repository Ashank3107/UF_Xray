import React, { useState, useContext } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from './context/AuthContext'; // Import AuthContext

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  const [error, setError] = useState(null);
  const { login } = useContext(AuthContext); 

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);

    try {
      const response = await axios.post('/api/auth/login', { email, password });

      login(response.data.token); 

      navigate('/'); 
    } catch (err) {
      if (err.response && err.response.data && err.response.data.message) {
        // More specific error messages
        if (err.response.data.message === 'Invalid credentials') {
          setError('The email or password you entered is incorrect.');
        } else {
          setError(err.response.data.message);
        }
      } else {
        setError('Login failed. Please try again.');
      }
      console.error('Login error:', err);
    }
  };

    return (
        <div className="background-gradient flex items-center justify-center min-h-screen">
            <div className="max-w-md w-full bg-white shadow-lg rounded-lg p-8 space-y-6">
                <div className="text-center">
                    <h2 className="text-3xl font-bold text-gray-900">Welcome to UFX-RAY</h2>
                    <p className="text-gray-600">Securely scan your files and URLs</p>
                </div>
                <div id="login-form">
                    <h3 className="text-xl font-semibold text-gray-800 mb-4">Login</h3>
                    <form onSubmit={handleSubmit}>
                        <div className="mb-4">
                            <label htmlFor="login-email" className="block text-gray-700">Email</label>
                            <input
                                type="email"
                                id="login-email"
                                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-600"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                required
                            />
                        </div>
                        <div className="mb-4">
                            <label htmlFor="login-password" className="block text-gray-700">Password</label>
                            <input
                                type="password"
                                id="login-password"
                                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-600"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                required
                            />
                        </div>
                        {error && <p style={{ color: 'red' }}>{error}</p>}
                        <button
                            type="submit"
                            className="w-full bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700 transition-colors"
                        >
                            Login
                        </button>
                    </form>
                </div>
                <div className="text-center">
                    <p className="text-gray-600">
                        Don't have an account?{' '}
                        <a href="/signup" className="text-indigo-600 hover:underline">
                            Sign Up
                        </a>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Login;