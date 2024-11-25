import React, { useState } from "react";
import { Dialog, DialogTitle, DialogContent, DialogActions, TextField, Button, RadioGroup, FormControlLabel, Radio,} from "@mui/material";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";

const AddModal = ({ open, onClose }) => {
  const [formData, setFormData] = useState({
    busId:"",
    numSeat: "",
    plateNum:"",
    type:"Xe thường",
    busRouteId:"",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = () => {
    console.log("Form Data Submitted: ", formData);
    onClose();
  };

  return (
    <Dialog open={open} onClose={onClose} fullWidth maxWidth="sm">
      <DialogTitle>
        <Button onClick={onClose} sx={{ minWidth: "40px" }}>
          <ArrowBackIosIcon />
        </Button>
        Thêm Một Xe
      </DialogTitle>
      <DialogContent>
        <TextField
          label="Mã xe"
          name="busId"
          value={formData.busId}
          onChange={handleChange}
          fullWidth
          margin="normal"
        />
        <TextField
          label="Số ghế"
          name="numSeat"
          value={formData.numSeat}
          onChange={handleChange}
          fullWidth
          margin="normal"
        />
        <TextField
          label="Điểm đến"
          name="destination"
          value={formData.destination}
          onChange={handleChange}
          fullWidth
          margin="normal"
        />
        <TextField
          label="Tuyến đang vận hành"
          name="busRouteId"
          value={formData.busRouteId}
          onChange={handleChange}
          fullWidth
          margin="normal"
        />
      </DialogContent>
      <DialogActions>
        <Button
          onClick={onClose}
          variant="outlined"
          sx={{
            color: "#2E6B75",
          }}
        >
          Hủy
        </Button>
        <Button
          onClick={handleSubmit}
          variant="contained"
          sx={{
            backgroundColor: "#D7987D",
            color: "#ffffff",
          }}
        >
          Tạo
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default AddModal;
