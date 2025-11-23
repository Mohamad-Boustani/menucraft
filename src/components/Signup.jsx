import React, { useState } from 'react';
import { TextField, Button, Select, MenuItem, InputLabel, FormControl } from '@mui/material';
import { Link } from 'react-router-dom';

function Signup() {
  const [countryCode, setCountryCode] = useState('+961');

  return (
    <div className="max-w-md mx-auto mt-10 p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-bold text-center mb-1">Create Account</h2>
      <div className="grid grid-cols-2 gap-4 mb-4">
        <TextField label="First Name" variant="outlined" size="small" fullWidth />
        <TextField label="Last Name" variant="outlined" size="small" fullWidth />
      </div>

      <TextField
        label="Email"
        variant="outlined"
        placeholder="your@email.com"
        size="small"
        fullWidth
        className="mb-4"
      />
       <br />
       <br />
      <TextField
        label="Password"
        variant="outlined"
        placeholder="Create a password"
        type="password"
        size="small"
        fullWidth
        className="mb-4"
      />
       <br />
       <br />
      <TextField
        label="Confirm Password"
        variant="outlined"
        placeholder="Confirm your password"
        type="password"
        size="small"
        fullWidth
        className="mb-4"
      />
        <br />
        <br />
      <TextField
        label="Date of Birth"
        variant="outlined"
        type="date"
        size="small"
        fullWidth
        InputLabelProps={{ shrink: true }}
        className="mb-4"
      />
       <br /> 
       <br />
      <div className="flex space-x-2 mb-6">
        <FormControl variant="outlined" size="small" className="w-24">
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
        <TextField label="Mobile Number" variant="outlined" placeholder="1234567890" size="small" fullWidth />
      </div>

      <Button
        variant="contained"
        size="large"
        fullWidth
        sx={{ backgroundColor: '#e63946', '&:hover': { backgroundColor: '#d62828' } }}
      >
        Create Account
      </Button>

      <p className="text-center text-gray-400 text-sm mt-4">
        Already have an account? <Link to="/login" className="text-red-600 underline">Sign in</Link>
      </p>
    </div>
  );
}

export default Signup;