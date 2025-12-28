import axios from "axios";
import React, { useState } from "react";
import { TextField, Button, InputAdornment } from "@mui/material";
import PhoneOutlinedIcon from "@mui/icons-material/PhoneOutlined";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { Link, useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function Login() {
  const navigate = useNavigate();

  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async () => {
    try {
      const response = await axios.post("http://localhost:5000/login", {
        Phone: phone,
        Password: password,
      });
      if (response.status === 200) {
        toast.success(response.data.message);
        const user = response.data.user;
        if (user) {
          localStorage.setItem("user", JSON.stringify(user));
          window.dispatchEvent(new Event("userUpdate"));
        }
        setTimeout(() => navigate("/menu"), 1500);
      }
    } catch (err) {
      const message = err.response?.data?.message || "Login failed";
      toast.error(message);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#fffaf5] px-4">
      <div className="w-full max-w-md bg-white rounded-2xl shadow-md p-8">
        {/* Back to Menu */}
        <button
          onClick={() => navigate("/menu")}
          className="flex items-center gap-2 text-sm text-gray-500 mb-6 hover:text-black"
        >
          <ArrowBackIcon fontSize="small" />
          Back to Menu
        </button>

        {/* Title */}
        <h1 className="text-center text-2xl font-bold tracking-widest">
          BURGER <span className="text-orange-500">HOUSE</span>
        </h1>
        <p className="text-center text-gray-500 mt-2">Login to your account</p>

        {/* Form */}
        <div className="mt-8 space-y-4">
          {/* Phone */}
          <TextField
            fullWidth
            placeholder="Phone Number"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <PhoneOutlinedIcon />
                </InputAdornment>
              ),
            }}
          />

          {/* Password */}
          <TextField
            fullWidth
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <LockOutlinedIcon />
                </InputAdornment>
              ),
            }}
          />

          {/* Login Button */}
          <Button
            fullWidth
            size="large"
            onClick={handleLogin}
            className="!bg-gradient-to-r !from-red-600 !to-orange-400 !text-white !rounded-full !py-3"
          >
            Login
          </Button>
        </div>

        {/* Register Link */}
        <p className="text-center text-sm text-gray-500 mt-6">
          Don’t have an account?{" "}
          <Link to="/register" className="text-orange-500 font-semibold">
            Register here
          </Link>
        </p>
        <ToastContainer position="top-center" autoClose={2000} />      </div>
    </div>
  );
}
