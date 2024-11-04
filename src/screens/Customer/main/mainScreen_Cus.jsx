import React, { useState } from 'react';
import { Box, Typography, Input, Button } from '@mui/material';
import styles from './mainScreen_Cus.module.css';
import CarDriver from '../../../assets/img/carDriver.svg';
import IOSSwitch from '../../../components/switch.jsx';
import SwapIcon from '../../../assets/icons/swap-icon.js';
import promo1 from '../../../assets/img/promo1.png';
import promo2 from '../../../assets/img/promo2.png';
import promo3 from '../../../assets/img/promo3.png';
import promo4 from '../../../assets/img/promo4.png';
import CarStand from'../../../assets/img/carStanding.svg';
const MainScreenCus = () => {
    const [checked, setChecked] = useState(false);

    const handleChange = (event) => {
        setChecked(event.target.checked);
    };

    // const promotions = [
    //     { img: promo1, title: "Special Offer" },
    //     { img: promo2, title: "Boxing Day Sale" },
    //     { img: promo3, title: "Limited Sale" },
    //     { img: promo4, title: "Flash Sale" },
    // ];

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
            <Box className={styles.containerPromo}>
    <div  className={styles.title}>
        KHUYẾN MÃI NỔI BẬT
    </div>
    <div className={styles.subtitle}>
        Các khuyến mãi hấp dẫn nổi bật
    </div>
    <Box className={styles.promo}>
                <img src={promo1} alt="Special Offer" className={styles.promoImage} />
                <img src={promo2} alt="Boxing Day Sale" className={styles.promoImage} />
                <img src={promo3} alt="Limited Sale" className={styles.promoImage} />
                <img src={promo4} alt="Flash Sale" className={styles.promoImage} />
            </Box>
   
</Box>
{/* <Box className={styles.promoList}>
        {promotions.map((promotion, index) => (
            <Box key={index} className={styles.promoItem}>
                <img
                    src={promotion.img}
                    alt={promotion.title}
                    loading="lazy"
                    className={styles.promoImage}
                />
            </Box>
        ))}
    </Box>    */}
<Box className={styles.box2}>
<Box className={styles.nameContainer} style={{ pointerEvents: 'none' }}>
                <text className={styles.name}>odau</text>
                <text className={styles.name1}>re</text>
                <text className={styles.name}>hon- CHÚNG TÔI SẴN SÀNG HOÀN TIỀN CHO BẠN</text>
            </Box>

    <Box className={styles.box3}>
<img src={CarStand} alt="standing car" className={styles.img2} />
<Box className={styles.Fram121}>
    <Box className={styles.frame118}>
        <Typography className={styles.text20000}>Hơn 20000 lượt đi</Typography>
        <Typography className={styles.textnhanduochon}>odaurehon nhận được hơn 20000 lượt đi trong năm 2023</Typography>
    </Box>
    <Box className={styles.frame119}>
        <Typography className={styles.text350}>Hơn 350 trạm</Typography>
        <Typography className={styles.texttannoi}>odaurehon có hơn 350 trạm, nơi đón khắp cả nước giúp khách hàng đến được tận nơi họ cần</Typography>
    </Box>
    <Box className={styles.frame120}>
        <Typography className={styles.text1000}>Hơn 1000 chuyến xe</Typography>
        <Typography className={styles.textchuyenxe}>odaurehon có hơn 1000 chuyến xe chạy mỗi ngày trong tuần</Typography>
    </Box>
</Box>
</Box>
</Box>
<Box className={styles.frame117}>
    <div className={styles.line}></div>
    <Typography className={styles.textLienhe}>LIÊN HỆ VỚI CHÚNG TÔI</Typography>
    <Box className={styles.frame116}>
        <Box className={styles.frame115}>
    <Box className={styles.frame45}>
    <Typography className={styles.textHoten}>Họ và tên</Typography>
        <Input className={styles.boxinputHoten} variant="plain" placeholder="Nguyen Van A"  />
        </Box>
        <Box className={styles.frame46}>
    <Typography className={styles.textsdt}>Số điện thoại</Typography>
        <Input className={styles.boxinputsdt} variant="plain" placeholder="0XX XXX XXXX"  />
        </Box>
        </Box>
        <Box className={styles.frame47}>
    <Typography className={styles.textEmail}>Email</Typography>
        <Input className={styles.boxinputemail} variant="plain" placeholder="abc@gmail.com"  />
        </Box>
        <Box className={styles.frame228}>
            <Typography className={styles.textndlienhe}>Nội dung</Typography>
            <Input className={styles.boxinputndlh}/>
            <Button className={styles.buttongui}>Gửi</Button>
        </Box>
    </Box>
</Box>
<div className={styles.bg}/>
<div className={styles.bg2}/>
        </div>
    );
};

export default MainScreenCus;
