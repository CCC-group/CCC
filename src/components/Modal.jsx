import React, { useState } from "react";
import {
  Button,
  Box,
  Modal,
  TextField,
  Select,
  MenuItem,
  InputLabel,
  FormControl,
} from "@mui/material";

const ModalForm = ({ open, handleClose }) => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    postalCode: "",
    state: "",
    subject: {},
    message: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    handleClose();
  };

  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box
        sx={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          bgcolor: "background.paper",
          boxShadow: 50,
          p: 4,
          width: 400,
          maxHeight: "80vh",
          overflowY: "auto",
        }}
      >
        <FormControl fullWidth>
          <InputLabel id="demo-simple-select-label">What do you want to learn more about?</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={formData.subject}
            label="subject"
            onChange={handleSubmit}
          >
            <MenuItem value={10}>Life Protection</MenuItem>
            <MenuItem value={20}>Be Your Own Bank</MenuItem>
            <MenuItem value={30}>Creating Generational Wealth</MenuItem>
            <MenuItem value={40}>Financial Security </MenuItem>
            <MenuItem value={50}>Make Additional Income</MenuItem>
            <MenuItem value={60}>Saving/Budgeting</MenuItem>
          </Select>

          <TextField
            label="FullName"
            name="fullName"
            value={formData.fullName}
            onChange={handleInputChange}
            fullWidth
            margin="normal"
            variant="outlined"
          />
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
            label="Phone"
            name="phone"
            value={formData.phone}
            onChange={handleInputChange}
            fullWidth
            margin="normal"
            variant="outlined"
          />
          <TextField
            label="Postal Code"
            name="postalCode"
            value={formData.postalCode}
            onChange={handleInputChange}
            fullWidth
            margin="normal"
            variant="outlined"
          />
          <TextField
            label="State"
            name="state"
            value={formData.state}
            onChange={handleInputChange}
            fullWidth
            margin="normal"
            variant="outlined"
          />
          <TextField
            label="Message"
            name="message"
            value={formData.message}
            onChange={handleInputChange}
            fullWidth
            multiline="true"
            wrap="true"
            rows={5}
            margin="normal"
            variant="outlined"
          />
          <Button type="submit" variant="contained" color="primary" fullWidth>
            Submit
          </Button>
        </FormControl>
      </Box>
    </Modal>
  );
};
export default ModalForm;
