import React, { useEffect, useState } from "react";
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
import axios from "axios";

const ModalForm = ({ open, handleClose }) => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    postalCode: "",
    state: "",
    subject: "",
    message: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    console.log(formData);
  };

  

  const  handleSubmit = async (e) => {
    e.preventDefault();
    const url =  `${import.meta.env.VITE_REACT_APP_SERVER}/api/addData`
    await axios.post(url, formData);
    handleClose();
  };
  const {subject, phone, state, email, firstName, lastName, message, postalCode } = formData;
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
          <InputLabel id="subject" style={{fontSize:'20px', marginLeft:'-12px'}}>Subject</InputLabel>
          <Select
            name='subject'
            labelId="Subject"
            id="subject"
            value={subject}
            onChange={handleInputChange}
            defaultValue={MenuItem.value}
            style={{marginTop:'20px'}}
          >
            <MenuItem value='Life Protection'>Life Protection</MenuItem>
            <MenuItem value='Be Your Own Bank'>Be Your Own Bank</MenuItem>
            <MenuItem value='Creating Generational Wealth'>Creating Generational Wealth</MenuItem>
            <MenuItem value='Financial Security'>Financial Security</MenuItem>
            <MenuItem value='Make Additional Income'>Make Additional Income</MenuItem>
            <MenuItem value='Saving/Budgeting'>Saving/Budgeting</MenuItem>
            <MenuItem value='Other'>Other</MenuItem>
          </Select>

          <TextField
            label="First Name"
            name="firstName"
            value={firstName}
            onChange={handleInputChange}
            fullWidth
            margin="normal"
            variant="outlined"
          />
           <TextField
            label="Last Name"
            name="lastName"
            value={lastName}
            onChange={handleInputChange}
            fullWidth
            margin="normal"
            variant="outlined"
          />
          <TextField
            label="Email"
            name="email"
            value={email}
            onChange={handleInputChange}
            fullWidth
            margin="normal"
            variant="outlined"
          />
          <TextField
            label="Phone"
            name="phone"
            value={phone}
            onChange={handleInputChange}
            fullWidth
            margin="normal"
            variant="outlined"
          />
          <TextField
            label="Postal Code"
            name="postalCode"
            value={postalCode}
            onChange={handleInputChange}
            fullWidth
            margin="normal"
            variant="outlined"
          />
          <TextField
            label="State"
            name="state"
            value={state}
            onChange={handleInputChange}
            fullWidth
            margin="normal"
            variant="outlined"
          />
          <TextField
            label="Message"
            name="message"
            value={message}
            onChange={handleInputChange}
            fullWidth
            multiline= {true}
            wrap="true"
            rows={5}
            margin="normal"
            variant="outlined"
          />
          <Button type="submit" onClick={handleSubmit} variant="contained" color="primary" fullWidth>
            Submit
          </Button>
        </FormControl>
      </Box>
    </Modal>
  );
};
export default ModalForm;
