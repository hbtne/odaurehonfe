import React from 'react'
import styles from './Navbar.module.css'
import { Box, Button} from '@mui/material';



const Navbar= () => {
    return(
        <Box className={styles.container}>

            <Box className={styles.nameContainer} style={{ pointerEvents: 'none' }}>
                <text className={styles.name}>odau</text>
                <text className={styles.name1}>re</text>
                <text className={styles.name}>hon</text>
            </Box>

            <Box className={styles.thanhContainer}>

                <Button className={styles.tchuContainer}>
                    <text className={styles.text}>TRANG CHỦ</text></Button>

                    <Button className={styles.tchuContainer}>
                    <text className={styles.text}>ĐẶT VÉ</text></Button>

                    <Button className={styles.tchuContainer}>
                    <text className={styles.text}>TRA CỨU VÉ</text></Button>

                    <Button className={styles.tchuContainer}>
                    <text className={styles.text}>LIÊN HỆ</text></Button>

                        <Box className={styles.ava} />
                    <Button className={styles.logoutContainer}>
                    <text className={styles.text}>ĐĂNG XUẤT</text>
                    </Button>
                   
                   
            </Box>
        </Box>
    )
}
export default Navbar;