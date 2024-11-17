import React, { useState } from 'react';
import styles from './chooseSeatScreenround.module.css';
import { Box, Button } from '@mui/material';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import Confirm from '../../../components/Modal/ConfirmTicket/ConfirmTicketround';

const ChooseSeatScreenRound = () => {
  const seatRowsOutbound = [
    { id: 'A1' }, { id: 'A2' }, { id: 'A3' }, { id: 'A4' }, { id: 'A5', booked: true }, { id: 'A6' },
    { id: 'A7' }, { id: 'A8' }, { id: 'A9' }, { id: 'A10', booked: true }, { id: 'A11' }, { id: 'A12' },
    { id: 'A13', booked: true }, { id: 'A14' }, { id: 'A15' }, { id: 'A16' }, { id: 'A17' }, { id: 'A18' }, { id: 'A19' },
    { id: 'B1' }, { id: 'B2' }, { id: 'B3' }, { id: 'B4' }, { id: 'B5', booked: true }, { id: 'B6' },
    { id: 'B7' }, { id: 'B8' }, { id: 'B9' }, { id: 'B10', booked: true }, { id: 'B11' }, { id: 'B12' },
    { id: 'B13', booked: true }, { id: 'B14' }, { id: 'B15' }, { id: 'B16' }, { id: 'B17' }, { id: 'B18' }, { id: 'B19' },
  ];
  const seatRowsReturn = [
    { id: 'A1' }, { id: 'A2' }, { id: 'A3' }, { id: 'A4' }, { id: 'A5', booked: true }, { id: 'A6' },
    { id: 'A7' }, { id: 'A8' }, { id: 'A9' }, { id: 'A10', booked: true }, { id: 'A11' }, { id: 'A12' },
    { id: 'A13', booked: true }, { id: 'A14' }, { id: 'A15' }, { id: 'A16' }, { id: 'A17' }, { id: 'A18' }, { id: 'A19' },
    { id: 'B1' }, { id: 'B2' }, { id: 'B3' }, { id: 'B4' }, { id: 'B5', booked: true }, { id: 'B6' },
    { id: 'B7' }, { id: 'B8' }, { id: 'B9' }, { id: 'B10', booked: true }, { id: 'B11' }, { id: 'B12' },
    { id: 'B13', booked: true }, { id: 'B14' }, { id: 'B15' }, { id: 'B16' }, { id: 'B17' }, { id: 'B18' }, { id: 'B19' },
  ];
  const routeOutbound = "Miền Tây - Ô Môn"; 
  const departureTimeOutbound = "13:30 09/12/2024"; 
  const routeReturnbound = "Ô Môn - Miền Tây"; 
  const departureTimeReturnbound = "16:30 12/12/2024"; 
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
  const [selectedOutboundSeats, setSelectedOutboundSeats] = useState([]);
  const [selectedReturnSeats, setSelectedReturnSeats] = useState([]);
  const seatPrice = 125000;

  const toggleOutboundSeatSelection = (seat) => {
    if (seat.booked) return;
    setSelectedOutboundSeats((prevSelectedSeats) => {
      return prevSelectedSeats.includes(seat.id)
        ? prevSelectedSeats.filter((s) => s !== seat.id)
        : [...prevSelectedSeats, seat.id];
    });
  };

  const toggleReturnSeatSelection = (seat) => {
    if (seat.booked) return;
    setSelectedReturnSeats((prevSelectedSeats) => {
      return prevSelectedSeats.includes(seat.id)
        ? prevSelectedSeats.filter((s) => s !== seat.id)
        : [...prevSelectedSeats, seat.id];
    });
  };

  const totalOutboundPrice = selectedOutboundSeats.length * seatPrice;
  const totalReturnPrice = selectedReturnSeats.length * seatPrice;

  return (
    <div className={styles.container}>
      <div className={styles.container1}>
      <div className={styles.backIcon}><Button><ArrowBackIosIcon/></Button></div>
      <div className={styles.texttilte}><h4>{routeOutbound}</h4></div>
      <div className={styles.title1}>Tầng dưới</div>
      <div className={styles.title2}>Tầng trên</div>
      <Box className={styles.seatLayout}>
        <Box></Box>
       
        <Box className={styles.seatColumn}>
       
          {seatRowsOutbound.slice(0, 19).map((seat) => (
            <Box
              key={seat.id}
              className={`${styles.seat} ${seat.booked ? styles.booked : selectedOutboundSeats.includes(seat.id) ? styles.selected : styles.available}`}
              onClick={() =>  toggleOutboundSeatSelection(seat)}
            >
              {seat.id}
              
            </Box>
          ))}
        </Box>
        <Box className={styles.seatColumn}>
          {seatRowsOutbound.slice(19).map((seat) => (
            <Box
              key={seat.id}
              className={`${styles.seat} ${seat.booked ? styles.booked : selectedOutboundSeats.includes(seat.id) ? styles.selected : styles.available}`}
              onClick={() => toggleOutboundSeatSelection(seat)}
            >
              {seat.id}
            </Box>
          ))}
        </Box>
        
      <Box className={styles.details}>
        <h2 className={styles.center}>Thông tin lượt đi</h2>
        <p><strong>Tuyến xe:</strong>{routeOutbound}</p>
        <p><strong>Thời gian xuất bến:</strong> {departureTimeOutbound}</p>
        <p><strong>Số lượng ghế:</strong> {selectedOutboundSeats.length}</p>
        <p><strong>Số ghế:</strong> {selectedOutboundSeats.join(', ')}</p>
        <p><strong>Tổng tiền lượt đi:</strong> {totalOutboundPrice.toLocaleString()} VND</p>
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
    <div className={styles.container2}>
      <div className={styles.texttilte}><h4> {routeReturnbound}</h4></div>
      <div className={styles.title1}>Tầng dưới</div>
      <div className={styles.title2}>Tầng trên</div>
      <Box className={styles.seatLayout}>
        <Box></Box>
       
        <Box className={styles.seatColumn}>
       
          {seatRowsReturn.slice(0, 19).map((seat) => (
            <Box
              key={seat.id}
              className={`${styles.seat} ${seat.booked ? styles.booked : selectedReturnSeats.includes(seat.id) ? styles.selected : styles.available}`}
              onClick={() => toggleReturnSeatSelection(seat)}
            >
              {seat.id}
              
            </Box>
          ))}
        </Box>
        <Box className={styles.seatColumn}>
          {seatRowsReturn.slice(19).map((seat) => (
            <Box
              key={seat.id}
              className={`${styles.seat} ${seat.booked ? styles.booked : selectedReturnSeats.includes(seat.id) ? styles.selected : styles.available}`}
              onClick={() => toggleReturnSeatSelection(seat)}
            >
              {seat.id}
            </Box>
          ))}
        </Box>
        
      <Box className={styles.details}>
        <h2 className={styles.center}>Thông tin lượt về</h2>
        <p><strong>Tuyến xe:</strong> {routeReturnbound}</p>
        <p><strong>Thời gian xuất bến:</strong>{departureTimeReturnbound} </p>
        <p><strong>Số lượng ghế:</strong> {selectedReturnSeats.length}</p>
        <p><strong>Số ghế:</strong> {selectedReturnSeats.join(', ')}</p>
        <p><strong>Tổng tiền lượt đi:</strong> {totalReturnPrice.toLocaleString()} VND</p>
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
        routeOutbound={routeOutbound}
        routeReturnbound={routeReturnbound}
        departureTimeOutbound={departureTimeOutbound}
        departureTimeReturnbound={departureTimeReturnbound}
        selectedReturnSeats={selectedReturnSeats}
        selectedOutboundSeats={selectedOutboundSeats}
        totalReturnPrice={totalReturnPrice}
        totalOutboundPrice={totalOutboundPrice}
      />
    </div>
    </div>
  );

};

export default ChooseSeatScreenRound;
