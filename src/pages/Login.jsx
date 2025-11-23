import React, { useState } from "react";
import { Link, useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();
    if (!email || !password) {
      toast.error('Please enter email and password');
      return;
    }

    // store minimal user info in localStorage (do NOT store plaintext passwords in real apps)
    const user = { email };
    localStorage.setItem('user', JSON.stringify(user));

    toast.success('Login successful');
    setTimeout(() => navigate('/home'), 800);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-300 px-4">
      <div className="bg-white shadow-lg rounded-2xl p-8 w-full max-w-md">
        {/* Title */}
        <h2 className="text-2xl font-bold text-center text-gray-800">
          Welcome Back
        </h2>
        <p className="text-center text-gray-500 mb-8">
          Sign in to your account
        </p>

        {/* Email */}
        <label className="text-gray-700 font-medium">Email</label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="your@email.com"
          className="w-full mt-2 mb-4 p-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-red-400"
        />

        {/* Password */}
        <label className="text-gray-700 font-medium">Password</label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Enter your password"
          className="w-full mt-2 mb-2 p-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-red-400"
        />

        {/* Login Button */}
        <button onClick={handleLogin} className="w-full bg-red-500 text-white font-semibold py-3 rounded-xl hover:bg-red-600 transition">
          Login
        </button>

        <ToastContainer position="top-right" />

        {/* Signup */}
        <div className="text-center mt-6 text-gray-700">
          Don’t have an account?
          <Link to="/signup" className="text-red-500 font-medium ml-1 hover:underline">
            Sign up
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Login;
