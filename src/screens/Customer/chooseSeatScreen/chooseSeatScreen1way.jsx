import React, { useState } from 'react';
import styles from './chooseSeatScreen1way.module.css';
import { Box, Typography } from '@mui/material';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
const ChooseSeatScreen1way = () => {
  const seatRows = [
    { id: 'A1' }, { id: 'A2' }, { id: 'A3' }, { id: 'A4' }, { id: 'A5', booked: true }, { id: 'A6' },
    { id: 'A7' }, { id: 'A8' }, { id: 'A9' }, { id: 'A10', booked: true }, { id: 'A11' }, { id: 'A12' },
    { id: 'A13', booked: true }, { id: 'A14' }, { id: 'A15' }, { id: 'A16' }, { id: 'A17' }, { id: 'A18' }, { id: 'A19' },
    { id: 'B1' }, { id: 'B2' }, { id: 'B3' }, { id: 'B4' }, { id: 'B5', booked: true }, { id: 'B6' },
    { id: 'B7' }, { id: 'B8' }, { id: 'B9' }, { id: 'B10', booked: true }, { id: 'B11' }, { id: 'B12' },
    { id: 'B13', booked: true }, { id: 'B14' }, { id: 'B15' }, { id: 'B16' }, { id: 'B17' }, { id: 'B18' }, { id: 'B19' },
  ];

  const [selectedSeats, setSelectedSeats] = useState([]);
  const seatPrice = 125000;

  const toggleSeatSelection = (seat) => {
    if (seat.booked) return;

    setSelectedSeats((prevSelectedSeats) => {
      if (prevSelectedSeats.includes(seat.id)) {
        return prevSelectedSeats.filter((s) => s !== seat.id);
      } else {
        return [...prevSelectedSeats, seat.id];
      }
    });
  };

  const totalPrice = selectedSeats.length * seatPrice;

  return (
    <div className={styles.container}>
      <Box className={styles.backIcon}><ArrowBackIosIcon/></Box>
      <Typography className={styles.texttilte}>TP. Hồ Chí Minh - Thốt Nốt</Typography>
      <Typography className={styles.title1}>Tầng dưới</Typography>
      <Typography className={styles.title2}>Tầng trên</Typography>
      <Box className={styles.seatLayout}>
        <Box></Box>
       
        <Box className={styles.seatColumn}>
       
          {seatRows.slice(0, 19).map((seat) => (
            <Box
              key={seat.id}
              className={`${styles.seat} ${seat.booked ? styles.booked : selectedSeats.includes(seat.id) ? styles.selected : styles.available}`}
              onClick={() => toggleSeatSelection(seat)}
            >
              {seat.id}
              
            </Box>
          ))}
        </Box>
        <Box className={styles.seatColumn}>
          {seatRows.slice(19).map((seat) => (
            <Box
              key={seat.id}
              className={`${styles.seat} ${seat.booked ? styles.booked : selectedSeats.includes(seat.id) ? styles.selected : styles.available}`}
              onClick={() => toggleSeatSelection(seat)}
            >
              {seat.id}
            </Box>
          ))}
        </Box>
        
      <Box className={styles.details}>
        <h2 className={styles.center}>Thông tin lượt đi</h2>
        <p><strong>Tuyến xe:</strong> Miền Tây - Ô Môn</p>
        <p><strong>Thời gian xuất bến:</strong> 13:30 09/12/2024</p>
        <p><strong>Số lượng ghế:</strong> {selectedSeats.length}</p>
        <p><strong>Số ghế:</strong> {selectedSeats.join(', ')}</p>
        <p><strong>Tổng tiền lượt đi:</strong> {totalPrice.toLocaleString()} đồng</p>
      </Box>
      </Box>
      <div className={styles.statusContainer}>
        <div className={styles.statusItem}>
            <div className={`${styles.statusBox} ${styles.bookedStatus}`} />
            <span className={styles.statusText}>Đã đặt</span>
        </div>
        <div className={styles.statusItem}>
            <div className={`${styles.statusBox} ${styles.availableStatus}`} />
            <span className={styles.statusText}>Còn trống</span>
        </div>
    </div>
      <button className={styles.bookButton}>Đặt vé</button>
    </div>
  );
};

export default ChooseSeatScreen1way;
