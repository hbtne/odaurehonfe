import React, { useState } from "react";
import { Dialog, DialogTitle, DialogContent, DialogActions, TextField, Button, RadioGroup, FormControlLabel, Radio,} from "@mui/material";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";

const EditAccountModal = ({ open, onClose }) => {
  const [formData, setFormData] = useState({
    fullName: "",
    gender: "",
    idNumber: "",
    phone: "",
    email: "",
    role: "Khách hàng",
    address: "",
    hireDate: "",
    driverLicense: "", 
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
       Chỉnh sửa Tài Khoản
      </DialogTitle>
      <DialogContent>
        <TextField
          label="Họ và tên"
          name="fullName"
          value={formData.fullName}
          onChange={handleChange}
          fullWidth
          margin="normal"
        />
        <TextField
          label="Giới tính"
          name="gender"
          value={formData.gender}
          onChange={handleChange}
          fullWidth
          margin="normal"
        />
        <TextField
          label="CCCD"
          name="idNumber"
          value={formData.idNumber}
          onChange={handleChange}
          fullWidth
          margin="normal"
        />
        <TextField
          label="Số điện thoại"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          fullWidth
          margin="normal"
        />
        <TextField
          label="Email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          fullWidth
          margin="normal"
        />
        <RadioGroup
          row
          name="role"
          value={formData.role}
          onChange={handleChange}
        >
          <FormControlLabel
            value="Khách hàng"
            control={<Radio />}
            label="Khách hàng"
          />
          <FormControlLabel
            value="Nhân viên"
            control={<Radio />}
            label="Nhân viên"
          />
          <FormControlLabel
            value="Tài xế"
            control={<Radio />}
            label="Tài xế"
          />
        </RadioGroup>
        {formData.role === "Khách hàng" && (
          <TextField
            label="Địa chỉ"
            name="address"
            value={formData.address}
            onChange={handleChange}
            fullWidth
            margin="normal"
          />
        )}
        {formData.role === "Nhân viên" && (
          <TextField
            label="Ngày tuyển dụng"
            name="hireDate"
            type="date"
            InputLabelProps={{
              shrink: true,
            }}
            value={formData.hireDate}
            onChange={handleChange}
            fullWidth
            margin="normal"
          />
        )}
        {formData.role === "Tài xế" && (
          <TextField
            label="Bằng lái"
            name="driverLicense"
            value={formData.driverLicense}
            onChange={handleChange}
            fullWidth
            margin="normal"
          />
        )}
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
          Cập nhật
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default EditAccountModal;
