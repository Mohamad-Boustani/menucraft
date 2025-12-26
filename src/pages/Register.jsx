import React, { useState } from "react";
import {
  TextField,
  Button,
  InputAdornment,
} from "@mui/material";

import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import PhoneOutlinedIcon from "@mui/icons-material/PhoneOutlined";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

import { Link, useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function Register() {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    phone: "",
    address: "",
    password: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleRegister = () => {
    for (const key in form) {
      if (!form[key].trim()) {
        toast.error(`❌ ${key.replace(/([A-Z])/g, " $1")} is required`);
        return;
      }
    }

    toast.success("✅ Registration successful!");
    setTimeout(() => navigate("/login"), 1500);
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
        <p className="text-center text-gray-500 mt-2">
          Create your account
        </p>

        {/* Form */}
        <div className="mt-8 space-y-4">
          <div className="flex gap-3">
            <TextField
              fullWidth
              name="firstName"
              placeholder="First Name"
              value={form.firstName}
              onChange={handleChange}
              error={!form.firstName}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <PersonOutlineIcon />
                  </InputAdornment>
                ),
              }}
            />

            <TextField
              fullWidth
              name="lastName"
              placeholder="Last Name"
              value={form.lastName}
              onChange={handleChange}
              error={!form.lastName}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <PersonOutlineIcon />
                  </InputAdornment>
                ),
              }}
            />
          </div>

          <TextField
            fullWidth
            name="phone"
            placeholder="Phone Number"
            value={form.phone}
            onChange={handleChange}
            error={!form.phone}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <PhoneOutlinedIcon />
                </InputAdornment>
              ),
            }}
          />

          <TextField
            fullWidth
            name="address"
            placeholder="Delivery Address"
            value={form.address}
            onChange={handleChange}
            error={!form.address}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <LocationOnOutlinedIcon />
                </InputAdornment>
              ),
            }}
          />

          <TextField
            fullWidth
            type="password"
            name="password"
            placeholder="Password"
            value={form.password}
            onChange={handleChange}
            error={!form.password}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <LockOutlinedIcon />
                </InputAdornment>
              ),
            }}
          />

          <Button
            fullWidth
            size="large"
            onClick={handleRegister}
            className="!bg-gradient-to-r !from-red-600 !to-orange-400 !text-white !rounded-full !py-3"
          >
            Register
          </Button>
        </div>

        <p className="text-center text-sm text-gray-500 mt-6">
          Already have an account?{" "}
          <Link to="/login" className="text-orange-500 font-semibold">
            Login here
          </Link>
        </p>

        <ToastContainer position="top-center" autoClose={2000} />
      </div>
    </div>
  );
}
