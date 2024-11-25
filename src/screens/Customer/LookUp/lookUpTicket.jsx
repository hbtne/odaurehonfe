import React, { useState } from 'react';
import styles from './lookUpTicket.module.css';
import { Box, Button } from '@mui/material';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';

const LookUpTicketScreen = () => {
  const [phone, setPhone] = useState('');
  const [ticketCode, setTicketCode] = useState('');
  const [result, setResult] = useState(null);

  const handleLookup = () => {
    setResult({
      ticketCode: 'OD143267',
      seatNumber: 'A15',
      departure: 'Bến xe Miền Tây',
      destination: 'VP Thốt Nốt',
      departureTime: '13:30 9/12/2024',
      busNumber: '79',
      licensePlate: '55A0 - 435.89',
    });
  };

 

  return (
    <div className={styles.container}>
      <div className={styles.backIcon}>
        <Button><ArrowBackIosIcon /></Button>
      </div>
      <div className={styles.container1}>
        <div className={styles.title}>TRA CỨU VÉ XE</div>
        <Box className={styles.formContainer}>
          <Box className={styles.inputGroup}>
            <label className={styles.label}>Số điện thoại</label>
            <input
              type="text"
              className={styles.input}
              placeholder="0xx xxx xxxx"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
            />
          </Box>
          <Box className={styles.inputGroup}>
            <label className={styles.label}>Mã vé xe</label>
            <input
              type="text"
              className={styles.input}
              placeholder="0xx xxx xxxx"
              value={ticketCode}
              onChange={(e) => setTicketCode(e.target.value)}
            />
          </Box>
        </Box>
        <div className={styles.buttonLookup} onClick={handleLookup}>
          <Button   
              variant="contained"
             
              sx={{
                backgroundColor:"#D7987D",
                borderRadius: '15px', 
                width: '160px',
               height: '60px',
              }}>Tra cứu</Button>
              </div>
      </div>
      <div className={styles.bg} />
      <h3 className={styles.resultTitle}>KẾT QUẢ TRUY XUẤT</h3>
      {result && (
          <Box className={styles.resultContainer}>
           <Box className={styles.ticketDetails}>
  <div className={styles.row}>
    <span className={styles.label}>Mã vé:</span>
    <span className={styles.value}>{result.ticketCode}</span>
  </div>
  <div className={styles.row}>
    <span className={styles.label}>Số ghế:</span>
    <span className={styles.value}>{result.seatNumber}</span>
  </div>
  <div className={styles.row}>
    <span className={styles.label}>Nơi đi:</span>
    <span className={styles.value}>{result.departure}</span>
  </div>
  <div className={styles.row}>
    <span className={styles.label}>Nơi đến:</span>
    <span className={styles.value}>{result.destination}</span>
  </div>
  <div className={styles.row}>
    <span className={styles.label}>Giờ khởi hành:</span>
    <span className={styles.value}>{result.departureTime}</span>
  </div>
  <div className={styles.row}>
    <span className={styles.label}>Số xe:</span>
    <span className={styles.value}>{result.busNumber}</span>
  </div>
  <div className={styles.row}>
    <span className={styles.label}>Biển số xe:</span>
    <span className={styles.value}>{result.licensePlate}</span>
  </div>
</Box>
            <div className={styles.cancelButton}>
              <Button
              variant="contained"
              color="error"
              sx={{
                borderRadius: '25px', 
              }}
            >
              Hủy vé
            </Button>
            </div>
          </Box>
        )}
    </div>
  );
};

export default LookUpTicketScreen;
