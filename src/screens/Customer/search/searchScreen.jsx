// import React, { useState } from 'react';
// import { Box} from '@mui/material';
// import styles from './searchScreen.module.css';
// import CarDriver from '../../../assets/img/carDriver.svg';
// import IOSSwitch from '../../../components/switch.jsx';
// import SwapIcon from '../../../assets/icons/swap-icon.js'; 
// import AdjustIcon from '@mui/icons-material/Adjust';

// const SearchScreen = () => {
//     const [checked, setChecked] = useState(false);

//     const handleChange = (event) => {
//         setChecked(event.target.checked);
//     };
//     const schedules = [
//         {
//             departureTime: '13:30',
//             departureStation: 'Bến xe Miền Tây',
//             duration: '4 giờ',
//             arrivalTime: '17:30',
//             arrivalStation: 'VP Thốt Nốt',
//             seatsAvailable: 25,
//             price: '170.000 đồng'
//         },
//         {
//             departureTime: '19:30',
//             departureStation: 'Bến xe ',
//             duration: '10 giờ',
//             arrivalTime: '17:30',
//             arrivalStation: 'VP Thốt Nốt',
//             seatsAvailable: 25,
//             price: '170.000 đồng'
//         },
//         {
//             departureTime: '13:30',
//             departureStation: 'Bến xe Miền Tây',
//             duration: '4 giờ',
//             arrivalTime: '17:30',
//             arrivalStation: 'VP Thốt Nốt',
//             seatsAvailable: 25,
//             price: '170.000 đồng'
//         },
//         {
//             departureTime: '13:30',
//             departureStation: 'Bến xe Miền Tây',
//             duration: '4 giờ',
//             arrivalTime: '17:30',
//             arrivalStation: 'VP Thốt Nốt',
//             seatsAvailable: 25,
//             price: '170.000 đồng'
//         },
//         {
//             departureTime: '13:30',
//             departureStation: 'Bến xe Miền Tây',
//             duration: '4 giờ',
//             arrivalTime: '17:30',
//             arrivalStation: 'VP Thốt Nốt',
//             seatsAvailable: 25,
//             price: '170.000 đồng'
//         },
//         {
//             departureTime: '13:30',
//             departureStation: 'Bến xe Miền Tây',
//             duration: '4 giờ',
//             arrivalTime: '17:30',
//             arrivalStation: 'VP Thốt Nốt',
//             seatsAvailable: 15,
//             price: '170.000 đồng'
//         },

//     ];


//     return (
//         <div className={styles.container}>
//             <Box className={styles.linear} />
//             <img src={CarDriver} alt="standing guy" className={styles.img} />
//             <Box className={styles.boxDatve}>
//                 <div className={styles.textDatve}>ĐẶT VÉ NGAY</div>
//             </Box>
//             <Box className={styles.box1}>
//                 <Box className={styles.boxTim}>
//                     <Box className={styles.boxKhuhoi}>
//                         <div className={styles.text}>Khứ hồi</div>
//                         <IOSSwitch
//                             className={styles.swi}
//                             checked={checked}
//                             onChange={handleChange}
//                             inputProps={{ 'aria-label': 'custom switch' }}
//                         />
//                     </Box>
//                     <div className={styles.fieldContainer}>
//                         <div className={styles.field}>
//                             <label htmlFor="departure" className={styles.text}>Điểm đi</label>
//                             <input type="text" id="departure" className={styles.inputField} />
//                         </div>
//                         <div className={styles.swap}> <SwapIcon/></div>
//                         <div className={styles.field}>
//                             <label htmlFor="arrival" className={styles.text}>Điểm đến</label>
//                             <input type="text" id="arrival" className={styles.inputField} />
//                         </div>
//                         <div className={styles.field}>
//                             <label htmlFor="departureDate" className={styles.text}>Ngày đi</label>
//                             <input type="date" id="departureDate"  className={`${styles.inputField} ${checked ? styles.inputField1 : ''}`} />
//                         </div>
//                         {checked && (
//             <div className={styles.field}>
//               <label htmlFor="returnDate" className={styles.text}>Ngày về</label>
//               <input type="date" id="returnDate" className={styles.inputField1} />
//             </div>
//           )}
//                         <div className={styles.field}>
//                             <label htmlFor="ticketNumber" className={styles.text}>Số vé</label>
//                             <input type="number" id="ticketNumber" className={styles.inputField} />
//                         </div>
//                     </div>
//                 </Box>
//                 <div className={styles.buttonContainer}>
//                     <button className={styles.searchButton}>Tìm chuyến xe</button>
//                 </div>
//             </Box>
            
         
//            <div className={styles.titleLoc}> Lọc </div>
//            <div className={styles.tilteTenchuyen}> TP. Hồ Chí Minh - Thốt Nốt </div>
//            <label className={styles.labelcheckboxx1}><input type="checkbox" color="#D7987D" className={styles.checkBox1}/> Chuyến đi</label>
//            <label className={styles.labelcheckboxx2}><input type="checkbox" color="#D7987D" className={styles.checkBox1}/> Chuyến về</label>
//                 <div className={styles.timeRangeContainer}>
//                     <div className={styles.timeRangeHeader}>Khung thời gian</div>
//                     <label><input type="checkbox" /> 0:00 - 6:00</label>
//                     <label><input type="checkbox" /> 6:00 - 12:00</label>
//                     <label><input type="checkbox" /> 12:00 - 18:00</label>
//                     <label><input type="checkbox" /> 18:00 - 0:00</label>
//                 </div>
//             <div className={styles.scheduleSection}>
//                 {schedules.map((schedule, index) => (
//                     <div key={index} className={styles.scheduleCard}>
//                         <div className={styles.timeInfo}>
//                             <div className={styles.time}>{schedule.departureTime}</div>
//                             <div className={styles.station}>{schedule.departureStation}</div>
//                         </div>
//                         <div className={styles.duration}>
//                             <span>{schedule.duration}</span>
//                         </div>
//                         <div className={styles.timeInfo1}>
//                             <div className={styles.time}>{schedule.arrivalTime}</div>
//                             <div className={styles.station}>{schedule.arrivalStation}</div>
//                         </div>
//                         <div className={styles.seatsAndPrice}>
//                             <span>{schedule.seatsAvailable} giường trống</span>
//                             <span className={styles.price}>{schedule.price}</span>
//                         </div>
//                         <div className={styles.diden}>
//                         <AdjustIcon className={styles.diemdi}/>
//                         <div>-------------------------------------------------------------------------</div>
//                         <AdjustIcon className={styles.diemden}/>
//                         </div>
//                         <button className={styles.selectButton}>Chọn chuyến</button>
                       
//                     </div>
//                 ))}
//         </div>
//         <div className={styles.bg}/>
// <div className={styles.bg2}/>
//         </div>
     
//     );
// };

// export default SearchScreen;
// import React, { useEffect, useState } from 'react';
// import axios from 'axios';
// import { Box } from '@mui/material';
// import styles from './searchScreen.module.css';
// import CarDriver from '../../../assets/img/carDriver.svg';
// import IOSSwitch from '../../../components/switch.jsx';
// import SwapIcon from '../../../assets/icons/swap-icon.js';
// import AdjustIcon from '@mui/icons-material/Adjust';

// const SearchScreen = () => {
//     const [checked, setChecked] = useState(false);
//     const [schedules, setSchedules] = useState([]);

//     const handleChange = (event) => {
//         setChecked(event.target.checked);
//     };

//     useEffect(() => {
//         const fetchSchedules = async () => {
//             try {
//                 const response = await axios.get('http://localhost:5278/api/ticket/bus-routes');
//                 const data = response.data.map(route => {
//                     const buses = route.buses.length ? route.buses : [{ seatsAvailable: 0, pricePerSeat: 0 }];
//                     return buses.map(bus => ({
//                         routeName: `${route.departPlace} - ${route.arrivalPlace}`,
//                         departureTime: formatTime(route.departureTime), 
//                         duration: route.duration,
//                         arrivalTime: calculateArrivalTime(route.departureTime, route.duration),
//                         seatsAvailable: bus.seatsAvailable,
//                         price: bus.pricePerSeat,
//                         plateNum: bus.plateNum,
//                         busType: bus.type,
//                     }));
//                 }).flat(); 
//                 setSchedules(data);
//                 console.log("data: ", data);
//             } catch (error) {
//                 console.error('Error fetching schedules:', error);
//             }
//         };
    
//         fetchSchedules();
//     }, []);
    
//     const calculateArrivalTime = (departureTime, duration) => {
//         if (typeof duration !== 'string') {
//             console.error('Duration is not a string:', duration);
//             return ''; 
//         }
    
//         const departureDate = new Date(departureTime);
    
//         const [durHours, durMinutes] = duration.split(':').map(Number);
    
//         departureDate.setHours(departureDate.getHours() + durHours);
//         departureDate.setMinutes(departureDate.getMinutes() + durMinutes);
    
     
//         return departureDate.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
//     };
    
   
//     const formatTime = (time) => {
//         const date = new Date(time);
//         return date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
//     };
    
//     return (
//         <div className={styles.container}>
//             <Box className={styles.linear} />
//             <img src={CarDriver} alt="standing guy" className={styles.img} />
//             <Box className={styles.boxDatve}>
//                 <div className={styles.textDatve}>ĐẶT VÉ NGAY</div>
//             </Box>
//             <Box className={styles.box1}>
//                 <Box className={styles.boxTim}>
//                     <Box className={styles.boxKhuhoi}>
//                         <div className={styles.text}>Khứ hồi</div>
//                         <IOSSwitch
//                             className={styles.swi}
//                             checked={checked}
//                             onChange={handleChange}
//                             inputProps={{ 'aria-label': 'custom switch' }}
//                         />
//                     </Box>
//                     <div className={styles.fieldContainer}>
//                         <div className={styles.field}>
//                             <label htmlFor="departure" className={styles.text}>Điểm đi</label>
//                             <input type="text" id="departure" className={styles.inputField} />
//                         </div>
//                         <div className={styles.swap}><SwapIcon /></div>
//                         <div className={styles.field}>
//                             <label htmlFor="arrival" className={styles.text}>Điểm đến</label>
//                             <input type="text" id="arrival" className={styles.inputField} />
//                         </div>
//                         <div className={styles.field}>
//                             <label htmlFor="departureDate" className={styles.text}>Ngày đi</label>
//                             <input
//                                 type="date"
//                                 id="departureDate"
//                                 className={`${styles.inputField} ${checked ? styles.inputField1 : ''}`}
//                             />
//                         </div>
//                         {checked && (
//                             <div className={styles.field}>
//                                 <label htmlFor="returnDate" className={styles.text}>Ngày về</label>
//                                 <input type="date" id="returnDate" className={styles.inputField1} />
//                             </div>
//                         )}
//                         <div className={styles.field}>
//                             <label htmlFor="ticketNumber" className={styles.text}>Số vé</label>
//                             <input type="number" id="ticketNumber" className={styles.inputField} />
//                         </div>
//                     </div>
//                 </Box>
//                 <div className={styles.buttonContainer}>
//                     <button className={styles.searchButton}>Tìm chuyến xe</button>
//                 </div>
//             </Box>

//             <div className={styles.titleLoc}>Lọc</div>
//             <div className={styles.scheduleSection}>
//                 {/* Check before rendering */}
//                 {Array.isArray(schedules) && schedules.length > 0 ? (
//                     schedules.map((schedule, index) => (
//                         <div key={index} className={styles.scheduleCard}>
//                             <div className={styles.timeInfo}>
//                                 <div className={styles.time}>{schedule.departureTime}</div>
//                                 <div className={styles.station}>{schedule.routeName.split(' - ')[0]}</div>
//                             </div>
//                             <div className={styles.duration}>
//                                 <span>{schedule.duration}</span>
//                             </div>
//                             <div className={styles.timeInfo1}>
//                                 <div className={styles.time}>{schedule.arrivalTime}</div>
//                                 <div className={styles.station}>{schedule.routeName.split(' - ')[1]}</div>
//                             </div>
//                             <div className={styles.seatsAndPrice}>
//                                 <span>{schedule.seatsAvailable} ghế trống</span>
//                                 <span className={styles.price}>{schedule.price} VND</span>
//                             </div>
//                             <div className={styles.diden}>
//                                 <AdjustIcon className={styles.diemdi} />
//                                 <div>-------------------------------------------------------------------------</div>
//                                 <AdjustIcon className={styles.diemden} />
//                             </div>
//                             <button className={styles.selectButton}>Chọn chuyến</button>
//                         </div>
//                     ))
//                 ) : (
//                     <div>Không có chuyến xe nào</div> // If no data is available
//                 )}
//             </div>
//             <div className={styles.bg} />
//             <div className={styles.bg2} />
//         </div>
//     );
// };

// export default SearchScreen;
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Box } from '@mui/material';
import styles from './searchScreen.module.css';
import CarDriver from '../../../assets/img/carDriver.svg';
import IOSSwitch from '../../../components/switch.jsx';
import SwapIcon from '../../../assets/icons/swap-icon.js';
import AdjustIcon from '@mui/icons-material/Adjust';
import { useNavigate } from 'react-router-dom';

const SearchScreen = () => {
    const [checked, setChecked] = useState(false);
    const [schedules, setSchedules] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleChange = (event) => {
        setChecked(event.target.checked);
    };

    useEffect(() => {
        const fetchSchedules = async () => {
            setLoading(true);
            try {
                const response = await axios.get('http://localhost:5278/api/bookticket/bus-bus-routes');
                console.log(response.data);
    
                const data = response.data.map(route => {
                    const buses = route.bus ? [route.bus] : [{ seatsAvailable: 0, pricePerSeat: 0 }];
    
                    return buses.map(bus => ({
                        routeName: `${route.departPlace} - ${route.arrivalPlace}`,
                        departureTime: formatTime(route.departureTime),
                        duration: route.duration, // You may need to adjust this if `duration` is not available
                        arrivalTime: calculateArrivalTime(route.departureTime, route.duration),
                        seatsAvailable: route.seatsAvailable,
                        price: route.pricePerSeat,
                        plateNum: bus.plateNum,
                        busType: bus.type,
                        busID: bus.busID,
                    }));
                }).flat();
    
                setSchedules(data);
            } catch (error) {
                setError('Không thể tải lịch trình. Vui lòng thử lại sau.');
                console.error('Error fetching schedules:', error);
            } finally {
                setLoading(false);
            }
        };
    
        fetchSchedules();
    }, []);
    

    const calculateArrivalTime = (departureTime, duration) => {
        if (typeof duration !== 'string') {
            console.error('Duration is not a string:', duration);
            return '';
        }

        const departureDate = new Date(departureTime);
        const [durHours, durMinutes] = duration.split(':').map(Number);
        departureDate.setHours(departureDate.getHours() + durHours);
        departureDate.setMinutes(departureDate.getMinutes() + durMinutes);

        return departureDate.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
    };

    const formatTime = (time) => {
        const date = new Date(time);
        return date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
    };

    const handleSelectBus = (busID) => {
        if (!checked) {
        navigate(`/customer/chooseseat1way/${busID}`); 
    } else {
        navigate(`/customer/chooseseatround/${busID}`); 
    }
    };
    

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
                        <div className={styles.swap}><SwapIcon /></div>
                        <div className={styles.field}>
                            <label htmlFor="arrival" className={styles.text}>Điểm đến</label>
                            <input type="text" id="arrival" className={styles.inputField} />
                        </div>
                        <div className={styles.field}>
                            <label htmlFor="departureDate" className={styles.text}>Ngày đi</label>
                            <input
                                type="date"
                                id="departureDate"
                                className={`${styles.inputField} ${checked ? styles.inputField1 : ''}`}
                            />
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

            <div className={styles.titleLoc}>Lọc</div>
            <div className={styles.scheduleSection}>
                {loading ? (
                    <div>Đang tải...</div>
                ) : error ? (
                    <div>{error}</div>
                ) : (
                    schedules.map((schedule, index) => (
                        <div key={index} className={styles.scheduleCard}>
                            <div className={styles.timeInfo}>
                                <div className={styles.time}>{schedule.departureTime}</div>
                                <div className={styles.station}>{schedule.routeName.split(' - ')[0]}</div>
                            </div>
                            <div className={styles.duration}>
                                <span>{schedule.duration}</span>
                            </div>
                            <div className={styles.timeInfo1}>
                                <div className={styles.time}>{schedule.arrivalTime}</div>
                                <div className={styles.station}>{schedule.routeName.split(' - ')[1]}</div>
                            </div>
                            <div className={styles.seatsAndPrice}>
                                <span>{schedule.seatsAvailable} ghế trống</span>
                                <span className={styles.price}>{schedule.price} VND</span>
                            </div>
                            <div className={styles.diden}>
                                <AdjustIcon className={styles.diemdi} />
                                <div>-------------------------------------------------------------------------</div>
                                <AdjustIcon className={styles.diemden} />
                            </div>
                            <button
                                className={styles.selectButton}
                                onClick={() => handleSelectBus(schedule.busID)}
                            >
                                Chọn chuyến
                            </button>
                        </div>
                    ))
                )}
            </div>
            <div className={styles.bg} />
            <div className={styles.bg2} />
        </div>
    );
};

export default SearchScreen;
