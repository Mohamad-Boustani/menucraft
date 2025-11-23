import React, { useState } from "react";
import {
  TextField,
  Button,
  Select,
  MenuItem,
  InputLabel,
  FormControl,
} from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Signup() {
  const navigate = useNavigate();
  const [countryCode, setCountryCode] = useState("+961");
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [dob, setDob] = useState('');
  const [mobile, setMobile] = useState('');

  const handleCreate = (e) => {
    e.preventDefault();
    // basic validation
    if (!firstName || !lastName || !email || !password || !confirmPassword) {
      toast.error('Please fill all required fields');
      return;
    }
    if (password !== confirmPassword) {
      toast.error('Passwords do not match');
      return;
    }

    // persist simple user record (for demo only)
    try {
      const usersRaw = localStorage.getItem('users');
      const users = usersRaw ? JSON.parse(usersRaw) : [];
      users.push({ firstName, lastName, email, countryCode, mobile, dob });
      localStorage.setItem('users', JSON.stringify(users));
    } catch (err) {
      // ignore
    }

    toast.success('Account created successfully');
    setTimeout(() => navigate('/login'), 800);
  }

  return (
    <div className="max-w-md mx-auto mt-10 p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-bold text-center mb-1">Create Account</h2>
      <form onSubmit={handleCreate}>
        <div className="grid grid-cols-2 gap-4 mb-4">
          <TextField
            label="First Name"
            variant="outlined"
            size="small"
            fullWidth
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
          />
          <TextField
            label="Last Name"
            variant="outlined"
            size="small"
            fullWidth
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
          />
        </div>

        <TextField
          label="Email"
          variant="outlined"
          placeholder="your@email.com"
          size="small"
          fullWidth
          className="mb-4"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <TextField
          label="Password"
          variant="outlined"
          placeholder="Create a password"
          type="password"
          size="small"
          fullWidth
          className="mb-4"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <TextField
          label="Confirm Password"
          variant="outlined"
          placeholder="Confirm your password"
          type="password"
          size="small"
          fullWidth
          className="mb-4"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
        />

        <TextField
          label="Date of Birth"
          variant="outlined"
          type="date"
          size="small"
          fullWidth
          InputLabelProps={{ shrink: true }}
          className="mb-4"
          value={dob}
          onChange={(e) => setDob(e.target.value)}
        />

        <div className="flex space-x-2 mb-6">
          <FormControl variant="outlined" size="small" className="w-1/3">
            <InputLabel id="country-code-label">Code</InputLabel>
            <Select
              labelId="country-code-label"
              value={countryCode}
              onChange={(e) => setCountryCode(e.target.value)}
              label="Code"
            >
              <MenuItem value="+961">+961</MenuItem>
              <MenuItem value="+44">+44</MenuItem>
              <MenuItem value="+91">+91</MenuItem>
            </Select>
          </FormControl>
          <TextField
            label="Mobile Number"
            variant="outlined"
            placeholder="1234567890"
            size="small"
            fullWidth
            value={mobile}
            onChange={(e) => setMobile(e.target.value)}
          />
        </div>

        <Button
          type="submit"
          variant="contained"
          size="large"
          fullWidth
          sx={{
            backgroundColor: "#e63946",
            "&:hover": { backgroundColor: "#d62828" },
          }}
        >
          Create Account
        </Button>
      </form>

      <p className="text-center text-gray-400 text-sm mt-4">
        Already have an account?{' '}
        <Link to="/login" className="text-red-600 underline">
          Sign in
        </Link>
      </p>
      <ToastContainer position="top-right" />
    </div>
  );
}

export default Signup;
