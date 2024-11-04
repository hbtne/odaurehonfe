import React, { useState } from 'react';
import { Box } from '@mui/material';
import styles from './cusbookingScreen.module.css';
import CarDriver from '../../../assets/img/carDriver.svg';
import IOSSwitch from '../../../components/switch.jsx';
import SwapIcon from '../../../assets/icons/swap-icon.js'; 
import AdjustIcon from '@mui/icons-material/Adjust';

const SearchScreen = () => {
    const [checked, setChecked] = useState(false);

    const handleChange = (event) => {
        setChecked(event.target.checked);
    };
    const schedules = [
        {
            departureTime: '13:30',
            departureStation: 'Bến xe Miền Tây',
            duration: '4 giờ',
            arrivalTime: '17:30',
            arrivalStation: 'VP Thốt Nốt',
            seatsAvailable: 25,
            price: '170.000 đồng'
        },
        {
            departureTime: '19:30',
            departureStation: 'Bến xe ',
            duration: '10 giờ',
            arrivalTime: '17:30',
            arrivalStation: 'VP Thốt Nốt',
            seatsAvailable: 25,
            price: '170.000 đồng'
        },
        {
            departureTime: '13:30',
            departureStation: 'Bến xe Miền Tây',
            duration: '4 giờ',
            arrivalTime: '17:30',
            arrivalStation: 'VP Thốt Nốt',
            seatsAvailable: 25,
            price: '170.000 đồng'
        },
        {
            departureTime: '13:30',
            departureStation: 'Bến xe Miền Tây',
            duration: '4 giờ',
            arrivalTime: '17:30',
            arrivalStation: 'VP Thốt Nốt',
            seatsAvailable: 25,
            price: '170.000 đồng'
        },
        {
            departureTime: '13:30',
            departureStation: 'Bến xe Miền Tây',
            duration: '4 giờ',
            arrivalTime: '17:30',
            arrivalStation: 'VP Thốt Nốt',
            seatsAvailable: 25,
            price: '170.000 đồng'
        },
        {
            departureTime: '13:30',
            departureStation: 'Bến xe Miền Tây',
            duration: '4 giờ',
            arrivalTime: '17:30',
            arrivalStation: 'VP Thốt Nốt',
            seatsAvailable: 15,
            price: '170.000 đồng'
        },

    ];


    return (
        <div className={styles.container}>
            <Box className={styles.linear} />
            <img src={CarDriver} alt="standing guy" className={styles.img} />
            <Box className={styles.boxDatve}>
                <div className={styles.textDatve}>ĐẶT VÉ NGAY</div>
            </Box>
            <Box className={styles.box1}>
                <Box className={styles.boxTim}>
                    <Box className={styles.boxKhuhoi}>
                        <div className={styles.text}>Khứ hồi</div>
                        <IOSSwitch
                            className={styles.swi}
                            checked={checked}
                            onChange={handleChange}
                            inputProps={{ 'aria-label': 'custom switch' }}
                        />
                    </Box>
                    <div className={styles.fieldContainer}>
                        <div className={styles.field}>
                            <label htmlFor="departure" className={styles.text}>Điểm đi</label>
                            <input type="text" id="departure" className={styles.inputField} />
                        </div>
                        <div className={styles.swap}> <SwapIcon/></div>
                        <div className={styles.field}>
                            <label htmlFor="arrival" className={styles.text}>Điểm đến</label>
                            <input type="text" id="arrival" className={styles.inputField} />
                        </div>
                        <div className={styles.field}>
                            <label htmlFor="departureDate" className={styles.text}>Ngày đi</label>
                            <input type="date" id="departureDate"  className={`${styles.inputField} ${checked ? styles.inputField1 : ''}`} />
                        </div>
                        {checked && (
            <div className={styles.field}>
              <label htmlFor="returnDate" className={styles.text}>Ngày về</label>
              <input type="date" id="returnDate" className={styles.inputField1} />
            </div>
          )}
                        <div className={styles.field}>
                            <label htmlFor="ticketNumber" className={styles.text}>Số vé</label>
                            <input type="number" id="ticketNumber" className={styles.inputField} />
                        </div>
                    </div>
                </Box>
                <div className={styles.buttonContainer}>
                    <button className={styles.searchButton}>Tìm chuyến xe</button>
                </div>
            </Box>
            
         
           
                <div className={styles.timeRangeContainer}>
                    <div className={styles.timeRangeHeader}>Khung thời gian</div>
                    <label><input type="checkbox" /> 0:00 - 6:00</label>
                    <label><input type="checkbox" /> 6:00 - 12:00</label>
                    <label><input type="checkbox" /> 12:00 - 18:00</label>
                    <label><input type="checkbox" /> 18:00 - 0:00</label>
                </div>
            <div className={styles.scheduleSection}>
                {schedules.map((schedule, index) => (
                    <div key={index} className={styles.scheduleCard}>
                        <div className={styles.timeInfo}>
                            <div className={styles.time}>{schedule.departureTime}</div>
                            <div className={styles.station}>{schedule.departureStation}</div>
                        </div>
                        <div className={styles.duration}>
                            <span>{schedule.duration}</span>
                        </div>
                        <div className={styles.timeInfo1}>
                            <div className={styles.time}>{schedule.arrivalTime}</div>
                            <div className={styles.station}>{schedule.arrivalStation}</div>
                        </div>
                        <div className={styles.seatsAndPrice}>
                            <span>{schedule.seatsAvailable} giường trống</span>
                            <span className={styles.price}>{schedule.price}</span>
                        </div>
                        <div className={styles.diden}>
                        <AdjustIcon className={styles.diemdi}/>
                        <div>-------------------------------------------------------------------------</div>
                        <AdjustIcon className={styles.diemden}/>
                        </div>
                        <button className={styles.selectButton}>Chọn chuyến</button>
                       
                    </div>
                ))}
        </div>
        </div>
     
    );
};

export default SearchScreen;