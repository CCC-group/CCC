import { Box, TextField, Button, Typography } from "@mui/material";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import {
  signIn,
  signInFailure,
  signInSuccess,
} from "../redux/authSlice"; // Import your Redux actions

function AdminSignIn() {
  const dispatch = useDispatch();
  const navigate = useNavigate()
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const action = await dispatch(signIn({ ...formData }));
      if (action.payload) {
        dispatch(signInSuccess(action.payload));
        navigate('/');
      }
    } catch (error) {
      console.error("sign-In failed:", error);
      dispatch(signInFailure(error.message));
    }
  };

  return (
    <Box
      component="form"
      onSubmit={handleSubmit}
      sx={{
        width: 300,
        margin: "auto",
        padding: "20px",
        border: "1px solid #ccc",
        borderRadius: "8px",
      }}
    >
      <Typography>Admin Login</Typography>
      <TextField
        label="Email"
        name="email"
        value={formData.email}
        onChange={handleInputChange}
        fullWidth
        margin="normal"
        variant="outlined"
      />
      <TextField
        label="Password"
        name="password"
        type="password"
        value={formData.password}
        onChange={handleInputChange}
        fullWidth
        margin="normal"
        variant="outlined"
      />
      <Button type="submit" variant="contained" color="primary">
        Sign In
      </Button>
    </Box>
  );
}

export default AdminSignIn;
