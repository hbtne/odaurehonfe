import React, { useState } from "react";
import { Dialog, DialogTitle, DialogContent, DialogActions, TextField, Button } from "@mui/material";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";

const EditModal = ({ open, onClose }) => {
  const [formData, setFormData] = useState({
    promotionId: "",
    name: "",
    startdate: "",
    enddate: "",
    discountpercent: "",
    discount: "",
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
        Cập Nhật Một Khuyến Mãi
      </DialogTitle>
      <DialogContent>
        <TextField
          label="Mã khuyến mãi"
          name="promotionId"
          value={formData.promotionId}
          onChange={handleChange}
          fullWidth
          margin="normal"
        />
        <TextField
          label="Tên khuyến mãi"
          name="name"
          value={formData.name}
          onChange={handleChange}
          fullWidth
          margin="normal"
        />
        <TextField
          label="Ngày bắt đầu"
          type="date"
          name="startdate"
          value={formData.startdate}
          onChange={handleChange}
          fullWidth
          margin="normal"
          InputLabelProps={{
            shrink: true, 
          }}
        />
        <TextField
          label="Ngày kết thúc"
          type="date"
          name="enddate"
          value={formData.enddate}
          onChange={handleChange}
          fullWidth
          margin="normal"
          InputLabelProps={{
            shrink: true,
          }}
        />
        <TextField
          label="Phần trăm khuyến mãi"
          name="discountpercent"
          value={formData.discountpercent}
          onChange={handleChange}
          fullWidth
          margin="normal"
        />
        <TextField
          label="Khuyến mãi"
          name="discount"
          value={formData.discount}
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
          Cập nhật
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default EditModal;
