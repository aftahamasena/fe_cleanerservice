import React from 'react';
import { useNavigate } from 'react-router-dom';
import logo from '../assets/logo.png';

const LoginPage = () => {
  const navigate = useNavigate();

  const handleLogin = () => {
    // Logika autentikasi dan penanganan login di sini
    // Setelah berhasil login, arahkan ke halaman utama
    navigate("/");
  };

  return (
    <div className="bg-gray-100 min-h-screen p-8 flex flex-col items-center justify-center">
      <div className="bg-blue-500 text-white text-center py-4 mb-8 rounded-lg w-full max-w-md">
        <h1 className="text-2xl font-bold">Login</h1>
        <p className="text-sm">Silahkan login terlebih dahulu</p>
      </div>
      <div className="bg-white p-6 rounded-lg shadow-md w-full max-w-md">
        <img src={logo} alt="Logo" className="mx-auto mb-4 h-32 w-80" />
        <div className="mb-4">
          <label className="block text-gray-800 text-sm font-bold mb-2" htmlFor="username">Username</label>
          <input
            type="text"
            id="username"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-800 leading-tight focus:outline-none focus:shadow-outline"
            placeholder="Username"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-800 text-sm font-bold mb-2" htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-800 leading-tight focus:outline-none focus:shadow-outline"
            placeholder="Password"
          />
        </div>
        <hr className="my-4" />
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full"
          type="button"
          onClick={handleLogin}
        >
          Login
        </button>
        <p className="text-center text-gray-600 mt-4">
          Don't have an account? <a href="/signup" className="text-blue-500 hover:text-blue-700">Sign up</a>
        </p>
      </div>
    </div>
  );
};

export default LoginPage;
