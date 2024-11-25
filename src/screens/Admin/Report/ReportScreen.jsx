import React, { useState } from "react";
import {Box, Button,Table, TableBody,  TableCell,  TableContainer,  TableHead,  TableRow, Paper, TextField,} from "@mui/material";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import { useNavigate } from "react-router-dom";
import styles from "./ReportScreen.module.css";

const ReportScreen = () => {
    const navigate = useNavigate();
    const [results, setResults] = useState([]);
    const [searchQuery, setSearchQuery] = useState({
      id: "",
      departure: "",
      destination: "",
      date: "",
    });
  
    const mockData = [
      {
        busRouteId: "79",
        departure: "Bến xe Miền Tây",
        destination: "VP Thốt Nốt",
        departureTime: "2024-12-09T05:30",
        duration: "4 tiếng",
        busId: "A10, A20",
        totalTickets: 40,
        soldTickets: 30,
        totalRevenue: 3000000,
      },
      {
        busRouteId: "80",
        departure: "Bến xe Miền Đông",
        destination: "VP Cần Thơ",
        departureTime: "2024-12-09T14:00",
        duration: "5 tiếng",
        busId: "B10, B20",
        totalTickets: 50,
        soldTickets: 45,
        totalRevenue: 4500000,
      },
    ];
  
    // Handle Search and Filters
    const handleFilter = () => {
      let filteredResults = mockData;
  
      if (searchQuery.id) {
        filteredResults = filteredResults.filter((busRoute) =>
          busRoute.busRouteId.includes(searchQuery.id)
        );
      }
  
      if (searchQuery.departure) {
        filteredResults = filteredResults.filter((busRoute) =>
          busRoute.departure.includes(searchQuery.departure)
        );
      }
  
      if (searchQuery.destination) {
        filteredResults = filteredResults.filter((busRoute) =>
          busRoute.destination.includes(searchQuery.destination)
        );
      }
  
      if (searchQuery.date) {
        filteredResults = filteredResults.filter((busRoute) =>
          busRoute.departureTime.startsWith(searchQuery.date)
        );
      }
  
      setResults(filteredResults);
    };
  
    // Calculate Total Revenue
    const calculateTotalRevenue = () => {
      return results.reduce((sum, route) => sum + route.totalRevenue, 0);
    };
  
    return (
      <div className={styles.container}>
        <div className={styles.backIcon}>
          <Button onClick={() => navigate(-1)}>
            <ArrowBackIosIcon />
          </Button>
        </div>
        <div className={styles.title}>BÁO CÁO</div>
  
        {/* Search Fields */}
        <Box className={styles.filter}>
          <TextField
            label="Tìm theo mã tuyến"
            onChange={(e) =>
              setSearchQuery((prev) => ({ ...prev, id: e.target.value }))
            }
            sx={{ width: "200px", marginRight: "16px" }}
          />
          <TextField
            label="Điểm đi"
            onChange={(e) =>
              setSearchQuery((prev) => ({ ...prev, departure: e.target.value }))
            }
            sx={{ width: "200px", marginRight: "16px" }}
          />
          <TextField
            label="Điểm đến"
            onChange={(e) =>
              setSearchQuery((prev) => ({ ...prev, destination: e.target.value }))
            }
            sx={{ width: "200px", marginRight: "16px" }}
          />
          <TextField
            label="Ngày"
            type="date"
            onChange={(e) =>
              setSearchQuery((prev) => ({ ...prev, date: e.target.value }))
            }
            InputLabelProps={{ shrink: true }}
            sx={{ width: "200px", marginRight: "16px" }}
          />
          <Button
            sx={{
              color: "#ffffff",
              backgroundColor: "#D7987D",
              borderRadius: "30px",
              width: "140px",
              height: "60px",
            }}
            onClick={handleFilter}
          >
            Tìm kiếm
          </Button>
          <Button
            sx={{
              color: "#ffffff",
              backgroundColor: "#2E6B75",
              borderRadius: "30px",
              width: "140px",
              height: "60px",
            }}
          >
            Xuất file
          </Button>
        </Box>
  
        {/* Results Table */}
        {results.length > 0 ? (
          <TableContainer
            component={Paper}
            className={styles.resultContainer}
            sx={{ overflowX: "auto" }}
          >
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell><strong>Mã tuyến</strong></TableCell>
                  <TableCell><strong>Thời gian khởi hành</strong></TableCell>
                  <TableCell><strong>Điểm đi</strong></TableCell>
                  <TableCell><strong>Điểm đến</strong></TableCell>
                  <TableCell><strong>Các bus đang vận hành</strong></TableCell>
                  <TableCell><strong>Số vé</strong></TableCell>
                  <TableCell><strong>Số vé đã bán</strong></TableCell>
                  <TableCell><strong>Tổng thu</strong></TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {results.map((busRoute, index) => (
                  <TableRow key={index} className={styles.tablerow}>
                    <TableCell>{busRoute.busRouteId}</TableCell>
                    <TableCell>{busRoute.departureTime}</TableCell>
                    <TableCell>{busRoute.departure}</TableCell>
                    <TableCell>{busRoute.destination}</TableCell>
                    <TableCell>{busRoute.busId}</TableCell>
                    <TableCell>{busRoute.totalTickets}</TableCell>
                    <TableCell>{busRoute.soldTickets}</TableCell>
                    <TableCell>{busRoute.totalRevenue.toLocaleString()} VNĐ</TableCell>
                  </TableRow>
                ))}
                {/* Total Revenue Row */}
                <TableRow>
                  <TableCell colSpan={7} align="right">
                    <strong>Tổng doanh thu:</strong>
                  </TableCell>
                  <TableCell>
                    <strong>{calculateTotalRevenue().toLocaleString()} VNĐ</strong>
                  </TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </TableContainer>
        ) : (
          <p>Không tìm thấy dữ liệu.</p>
        )}
      </div>
    );
  };
  
  export default ReportScreen;