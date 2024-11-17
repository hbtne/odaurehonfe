import React, { useState } from 'react';
import styles from './chooseSeatScreen1way.module.css';
import { Box, Button } from '@mui/material';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import Confirm from '../../../components/Modal/ConfirmTicket/ConfirmTicket1way';
const ChooseSeatScreen1way = () => {
  const seatRows = [
    { id: 'A1' }, { id: 'A2' }, { id: 'A3' }, { id: 'A4' }, { id: 'A5', booked: true }, { id: 'A6' },
    { id: 'A7' }, { id: 'A8' }, { id: 'A9' }, { id: 'A10', booked: true }, { id: 'A11' }, { id: 'A12' },
    { id: 'A13', booked: true }, { id: 'A14' }, { id: 'A15' }, { id: 'A16' }, { id: 'A17' }, { id: 'A18' }, { id: 'A19' },
    { id: 'B1' }, { id: 'B2' }, { id: 'B3' }, { id: 'B4' }, { id: 'B5', booked: true }, { id: 'B6' },
    { id: 'B7' }, { id: 'B8' }, { id: 'B9' }, { id: 'B10', booked: true }, { id: 'B11' }, { id: 'B12' },
    { id: 'B13', booked: true }, { id: 'B14' }, { id: 'B15' }, { id: 'B16' }, { id: 'B17' }, { id: 'B18' }, { id: 'B19' },
  ];
  const route = "Miền Tây - Ô Môn"; 
const departureTime = "13:30 09/12/2024"; 
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const handleBookTicket = () => {
    setIsDialogOpen(true);
  };

  const handleCloseDialog = () => {
    setIsDialogOpen(false);
  };

  const handleConfirmBooking = () => {
    alert('Đặt vé thành công!');
    setIsDialogOpen(false);
  };

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
      <div className={styles.backIcon}><Button><ArrowBackIosIcon/></Button></div>
      <div className={styles.texttilte}><h4>{route}</h4></div>
      <div className={styles.title1}>Tầng dưới</div>
      <div className={styles.title2}>Tầng trên</div>
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
        <p><strong>Tuyến xe:</strong> {route} </p>
        <p><strong>Thời gian xuất bến:</strong> {departureTime}</p>
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
      <button className={styles.bookButton}  onClick={handleBookTicket}>Đặt vé</button>
      <Confirm
        isOpen={isDialogOpen}
        onClose={handleCloseDialog}
        onConfirm={handleConfirmBooking}
        route={route}
        departureTime={departureTime}
        selectedSeats={selectedSeats}
        totalPrice={totalPrice}
      />
    </div>
  );
};

export default ChooseSeatScreen1way;
