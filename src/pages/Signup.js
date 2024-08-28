import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import logo from '../assets/logo.png';

const SignupPage = () => {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    telephone: '',
    address: '',
    password: ''
  });
  const [isRegistered, setIsRegistered] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleRegister = () => {
    // Simulasi validasi sederhana
    if (!formData.username || !formData.email || !formData.password) {
      alert('Username, email, and password are required');
      return;
    }

    // Logika pendaftaran di sini (simulasi)
    setIsRegistered(true);
    setTimeout(() => {
      navigate('/login');
    }, 3000); // Direct ke /login setelah 3 detik
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="bg-gray-100 min-h-screen p-8 flex flex-col items-center justify-center">
      <div className="bg-white p-6 rounded-lg shadow-md max-w-md w-full">
        <img src={logo} alt="Logo" className="mx-auto w-80 h-32 mb-4" />
        <h2 className="text-2xl font-semibold text-center text-gray-800 mb-2">Sign Up</h2>
        {isRegistered && (
          <p className="text-green-500 text-center mb-4">Registration successful. Please wait, redirecting to login page...</p>
        )}
        <div className="mb-4">
          <label className="block text-gray-800 text-sm font-bold mb-2" htmlFor="username">Username</label>
          <input
            type="text"
            id="username"
            name="username"
            value={formData.username}
            onChange={handleChange}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-800 leading-tight focus:outline-none focus:shadow-outline"
            placeholder="Username"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-800 text-sm font-bold mb-2" htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-800 leading-tight focus:outline-none focus:shadow-outline"
            placeholder="Email"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-800 text-sm font-bold mb-2" htmlFor="telephone">Telephone</label>
          <input
            type="tel"
            id="telephone"
            name="telephone"
            value={formData.telephone}
            onChange={handleChange}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-800 leading-tight focus:outline-none focus:shadow-outline"
            placeholder="Telephone"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-800 text-sm font-bold mb-2" htmlFor="address">Address</label>
          <input
            type="text"
            id="address"
            name="address"
            value={formData.address}
            onChange={handleChange}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-800 leading-tight focus:outline-none focus:shadow-outline"
            placeholder="Address"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-800 text-sm font-bold mb-2" htmlFor="password">Password</label>
          <div className="relative">
            <input
              type={showPassword ? 'text' : 'password'}
              id="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-800 leading-tight focus:outline-none focus:shadow-outline"
              placeholder="Password"
            />
            <button
              className="absolute inset-y-0 right-0 flex items-center px-3 focus:outline-none"
              onClick={togglePasswordVisibility}
            >
              {showPassword ? 'Hide' : 'Show'}
            </button>
          </div>
        </div>
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full"
          type="button"
          onClick={handleRegister}
        >
          Register
        </button>
        <p className="text-center text-gray-600 mt-4">
          Already have an account? <Link to="/login" className="text-blue-500 hover:text-blue-700">Login</Link>
        </p>
      </div>
    </div>
  );
};

export default SignupPage;
