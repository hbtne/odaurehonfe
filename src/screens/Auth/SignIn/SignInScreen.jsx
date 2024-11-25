import React, { useState } from "react";
import styles from "./SignInScreen.module.css";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import {  Box, Button, Table,  TableBody, TableCell,TableContainer, TableHead,TableRow,Paper,TextField,MenuItem,Select,} from "@mui/material";
import { useNavigate } from "react-router-dom";


const SignInScreen = () => {
    const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
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
    <div className={styles.title}>ĐĂNG NHẬP</div>
    <Box className={styles.formContainer}>
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
      <label className={styles.label}>Mật khẩu</label>
      <input
        type="password"
        name="password"
        value={formData.password}
        onChange={handleInputChange}
        className={styles.input}
        placeholder=""
      />
    </Box>

  <Box className={styles.confirm}>
    <div className={styles.paying}>
      <Button>
        <div className={styles.textbutton}>Đăng nhập</div>
      </Button>
    </div>
    <div className={styles.forget}>
      <Button>
        Quên mật khẩu?
      </Button>
    </div>
  </Box>
</Box>
          
    </div>
  );
};

export default SignInScreen;
