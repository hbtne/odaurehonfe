import React, { useState } from "react";
import { Box,Button, Table, TableBody, TableCell, TableContainer, TableHead,TableRow,  Paper, TextField} from "@mui/material";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import { useNavigate } from "react-router-dom";
import styles from "./ViewScheduleScreen.module.css";

const ViewScheduleScreen = () => {
  const navigate = useNavigate();
  const [results, setResults] = useState([
    {
      busId: "OD143267",
      busRouteId: "A15",
      departure: "Bến xe Miền Tây",
      destination: "VP Thốt Nốt",
      departureTime: "2024-12-09T13:30",
      duration: "4 tiếng",
      licensePlate: "55A0 - 435.89",
      status: "Đã hoàn thành",
    },
    {
      busId: "OD143268",
      busRouteId: "B10",
      departure: "Bến xe Miền Đông",
      destination: "VP Cần Thơ",
      departureTime: "2024-12-10T14:00",
      duration: "5 tiếng",
      licensePlate: "66B1 - 789.12",
      status: "Chưa khởi hành",
    },
   
  ]);

  const [filterDate, setFilterDate] = useState("");

  const handleFilter = () => {
    if (filterDate) {
      const filteredResults = results.filter((ticket) =>
        ticket.departureTime.startsWith(filterDate)
      );
      setResults(filteredResults);
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.backIcon}>
        <Button onClick={() => navigate(-1)}>
          <ArrowBackIosIcon />
        </Button>
      </div>
      <div className={styles.title}>LỊCH TRÌNH</div>

      <Box className={styles.filter}>
        <TextField
          label="Chọn ngày"
          type="date"
          InputLabelProps={{
            shrink: true,
          }}
          onChange={(e) => setFilterDate(e.target.value)}
          sx={{ width: "200px" }}
        />
        <Button 
        sx={{ color:"#ffffff",
            backgroundColor:"#D7987D",
                borderRadius: '30px', 
                width: '140px',
               height: '60px',}} 
               onClick={handleFilter}>
          Tìm kiếm
        </Button>
      </Box>
      {results.length > 0 ? (
        <TableContainer
          component={Paper}
          className={styles.resultContainer}
          sx={{ overflowX: "auto" }}
        >
          <Table>
            <TableHead>
              <TableRow>
                <TableCell><strong>Tuyến xe</strong></TableCell>
                <TableCell><strong>Số xe</strong></TableCell>
                <TableCell><strong>Nơi đi</strong></TableCell>
                <TableCell><strong>Nơi đến</strong></TableCell>
                <TableCell><strong>Giờ khởi hành</strong></TableCell>
                <TableCell><strong>Thời gian dự kiến</strong></TableCell>
                <TableCell><strong>Biển số xe</strong></TableCell>
                <TableCell><strong>Trạng thái</strong></TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {results.map((ticket, index) => (
                <TableRow key={index}>
                  <TableCell>{ticket.busRouteId}</TableCell>
                  <TableCell>{ticket.busId}</TableCell>
                  <TableCell>{ticket.departure}</TableCell>
                  <TableCell>{ticket.destination}</TableCell>
                  <TableCell>
                    {new Date(ticket.departureTime).toLocaleString("vi-VN", {
                      dateStyle: "short",
                      timeStyle: "short",
                    })}
                  </TableCell>
                  <TableCell>{ticket.duration}</TableCell>
                  <TableCell>{ticket.licensePlate}</TableCell>
                  <TableCell>
                    <span
                      style={{
                        color: ticket.status === "Đã hoàn thành" ? "#D7987D" : "#2E6B75",
                        fontWeight: "bold",
                      }}
                    >
                      {ticket.status}
                    </span>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      ) : (
        <p>Không tìm thấy dữ liệu theo thời gian đã chọn.</p>
      )}
    </div>
  );
};

export default ViewScheduleScreen;
