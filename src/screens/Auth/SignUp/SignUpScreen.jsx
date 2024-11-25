import React, { useState } from "react";
import styles from "./SignUpScreen.module.css";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import {  Box, Button, Table,  TableBody, TableCell,TableContainer, TableHead,TableRow,Paper,TextField,MenuItem,Select,} from "@mui/material";
import { useNavigate } from "react-router-dom";


const SignUpScreen = () => {
    const navigate = useNavigate();
  const [formData, setFormData] = useState({
    fullName: "",
    gender: "",
    phone: "",
    email: "",
    idCard: "",
    password: "",
    confirmPassword: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.password !== formData.confirmPassword) {
      alert("Passwords do not match!");
      return;
    }
    console.log("Form Submitted", formData);
  };

  return (
    <div className={styles.container}>
         <div className={styles.backIcon}>
        <Button onClick={() => navigate(-1)}>
          <ArrowBackIosIcon />
        </Button>
      </div>
    <div className={styles.title}>ĐĂNG KÝ TÀI KHOẢN</div>
    <Box className={styles.formContainer}>
  <Box className={styles.row}>
    <Box className={styles.inputGroup}>
      <label className={styles.label}>Họ và tên</label>
      <input
        type="text"
        name="fullName"
        value={formData.fullName}
        onChange={handleInputChange}
        className={styles.input1}
        placeholder="Nguyễn Văn A"
      />
    </Box>
    <Box className={styles.inputGroup}>
      <label className={styles.label}>Giới tính</label>
      <Select
        name="gender"
        value={formData.gender}
        onChange={handleInputChange}
        className={styles.input1}
      >
        <MenuItem value="male">Nam</MenuItem>
        <MenuItem value="female">Nữ</MenuItem>
        <MenuItem value="other">Khác</MenuItem>
      </Select>
    </Box>
  </Box>
  <Box className={styles.inputGroup}>
    <label className={styles.label}>Số điện thoại</label>
    <input
      type="text"
      name="phone"
      value={formData.phone}
      onChange={handleInputChange}
      className={styles.input}
      placeholder="0xx xxx xxxx"
    />
  </Box>
  <Box className={styles.inputGroup}>
    <label className={styles.label}>Email</label>
    <input
      type="email"
      name="email"
      value={formData.email}
      onChange={handleInputChange}
      className={styles.input}
      placeholder="abc@gmail.com"
    />
  </Box>
  <Box className={styles.inputGroup}>
    <label className={styles.label}>Căn cước công dân</label>
    <input
      type="text"
      name="idCard"
      value={formData.idCard}
      onChange={handleInputChange}
      className={styles.input}
      placeholder="09xxxxxxxx"
    />
  </Box>
  <Box className={styles.row}>
    <Box className={styles.inputGroup}>
      <label className={styles.label}>Mật khẩu</label>
      <input
        type="password"
        name="password"
        value={formData.password}
        onChange={handleInputChange}
        className={styles.input1}
        placeholder=""
      />
    </Box>
    <Box className={styles.inputGroup}>
      <label className={styles.label}>Xác nhận mật khẩu</label>
      <input
        type="password"
        name="confirmPassword"
        value={formData.confirmPassword}
        onChange={handleInputChange}
        className={styles.input1}
        placeholder=""
      />
    </Box>
  </Box>
  <Box className={styles.confirm}>
    <div className={styles.cancel}>
      <Button>Hủy</Button>
    </div>
    <div className={styles.paying}>
      <Button>
        <div className={styles.textbutton}>Đăng ký</div>
      </Button>
    </div>
  </Box>
</Box>
          
    </div>
  );
};

export default SignUpScreen;
