// import React, { useState } from "react";
// import { Dialog, DialogTitle, DialogContent, DialogActions, TextField, Button } from "@mui/material";
// import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
// import axios from 'axios';

// const AddModal = ({ open, onClose }) => {
//   const [formData, setFormData] = useState({
//     busRouteId: "",
//     departure: "",
//     destination: "",
//     departureTime: "",
//     duration: "",
//     busId: "",
//   });

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({ ...formData, [name]: value });
//   };

//   const handleSubmit = async () => {
//     try {
//       // Gửi dữ liệu đến API backend để tạo tuyến xe mới
//       const response = await axios.post("http://localhost:5278/api/busroute", formData);

//       console.log("Tuyến xe đã được thêm thành công: ", response.data);

//       // Đóng modal và reset form
//       onClose();
//       setFormData({
//         busRouteId: "",
//         departure: "",
//         destination: "",
//         departureTime: "",
//         duration: "",
//         busId: "",
//       });
//     } catch (error) {
//       console.error("Có lỗi xảy ra khi thêm tuyến xe: ", error);
//     }
//   };

//   return (
//     <Dialog open={open} onClose={onClose} fullWidth maxWidth="sm">
//       <DialogTitle>
//         <Button onClick={onClose} sx={{ minWidth: "40px" }}>
//           <ArrowBackIosIcon />
//         </Button>
//         Thêm Một Tuyến Xe
//       </DialogTitle>
//       <DialogContent>
//         <TextField
//           label="Mã tuyến xe"
//           name="busRouteId"
//           value={formData.busRouteId}
//           onChange={handleChange}
//           fullWidth
//           margin="normal"
//         />
//         <TextField
//           label="Điểm đi"
//           name="departure"
//           value={formData.departure}
//           onChange={handleChange}
//           fullWidth
//           margin="normal"
//         />
//         <TextField
//           label="Điểm đến"
//           name="destination"
//           value={formData.destination}
//           onChange={handleChange}
//           fullWidth
//           margin="normal"
//         />
//         <TextField
//           label="Thời gian khởi hành"
//           name="departureTime"
//           value={formData.departureTime}
//           onChange={handleChange}
//           fullWidth
//           margin="normal"
//         />
//         <TextField
//           label="Xe đang vận hành"
//           name="busId"
//           value={formData.busId}
//           onChange={handleChange}
//           fullWidth
//           margin="normal"
//         />
//       </DialogContent>
//       <DialogActions>
//         <Button
//           onClick={onClose}
//           variant="outlined"
//           sx={{
//             color: "#2E6B75",
//           }}
//         >
//           Hủy
//         </Button>
//         <Button
//           onClick={handleSubmit}
//           variant="contained"
//           sx={{
//             backgroundColor: "#D7987D",
//             color: "#ffffff",
//           }}
//         >
//           Tạo
//         </Button>
//       </DialogActions>
//     </Dialog>
//   );
// };

// export default AddModal;
import React, { useState } from "react";
import { Dialog, DialogTitle, DialogContent, DialogActions, TextField, Button } from "@mui/material";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import { DateTimePicker } from "@mui/x-date-pickers/DateTimePicker"; // Import DateTimePicker
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import axios from "axios";

const AddModal = ({ open, onClose }) => {
  const [formData, setFormData] = useState({
    busRouteId: "",
    departPlace: "",
    arrivalPlace: "",
    departureTime: null, 
    duration: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleDateChange = (newValue) => {
    setFormData({ ...formData, departureTime: newValue });
  };

  const handleSubmit = async () => {
    try {
      const newRoute = {
        busRouteId: formData.busRouteId,
        departPlace: formData.departPlace,
        arrivalPlace: formData.arrivalPlace,
        departureTime: formData.departureTime ? formData.departureTime.toISOString() : null, // Đảm bảo gửi thời gian ở định dạng ISO 8601
        duration: formData.duration,
      };
  
      const response = await axios.post("http://localhost:5278/api/busroute", newRoute);
      console.log("Tuyến xe đã được thêm thành công: ", response.data);
      onClose(); 
      setFormData({
        busRouteId: "",
        departPlace: "",
        arrivalPlace: "",
        departureTime: null,
        duration: "",
      });
    } catch (error) {
      console.error("Có lỗi xảy ra khi thêm tuyến xe: ", error);
      if (error.response) {
        console.log("Lỗi từ server: ", error.response.data);
      }
    }
  };
  
  return (
    <Dialog open={open} onClose={onClose} fullWidth maxWidth="sm">
      <DialogTitle>
        <Button onClick={onClose} sx={{ minWidth: "40px" }}>
          <ArrowBackIosIcon />
        </Button>
        Thêm Một Tuyến Xe
      </DialogTitle>
      <DialogContent>
        <TextField
          label="Mã tuyến xe"
          name="busRouteId"
          value={formData.busRouteId}
          onChange={handleChange}
          fullWidth
          margin="normal"
        />
        <TextField
          label="Điểm đi"
          name="departPlace"
          value={formData.departPlace}
          onChange={handleChange}
          fullWidth
          margin="normal"
        />
        <TextField
          label="Điểm đến"
          name="arrivalPlace"
          value={formData.arrivalPlace}
          onChange={handleChange}
          fullWidth
          margin="normal"
        />
        <LocalizationProvider dateAdapter={AdapterDateFns}>
          <DateTimePicker
            label="Thời gian khởi hành"
            value={formData.departureTime}
            onChange={handleDateChange}
            renderInput={(params) => <TextField {...params} fullWidth margin="normal" />}
          />
        </LocalizationProvider>
        <TextField
          label="Thời gian di chuyển"
          name="duration"
          value={formData.duration}
          onChange={handleChange}
          fullWidth
          margin="normal"
        />
      </DialogContent>
      <DialogActions>
        <Button
          onClick={onClose}
          variant="outlined"
          sx={{ color: "#2E6B75" }}
        >
          Hủy
        </Button>
        <Button
          onClick={handleSubmit}
          variant="contained"
          sx={{ backgroundColor: "#D7987D", color: "#ffffff" }}
        >
          Tạo
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default AddModal;
