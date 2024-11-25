import React from "react";
import { Box, Button, Card, CardContent, Typography } from "@mui/material";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import styles from "./HistoryBookingScreen.module.css";

const TicketDetails = ({ ticket }) => (
  <Box className={styles.ticketDetails}>
    <div className={styles.row}>
      <span className={styles.label}>Mã vé:</span>
      <span className={styles.value}>{ticket.ticketId}</span>
    </div>
    <div className={styles.row}>
      <span className={styles.label}>Số ghế:</span>
      <span className={styles.value}>{ticket.seatNumber}</span>
    </div>
    <div className={styles.row}>
      <span className={styles.label}>Nơi đi:</span>
      <span className={styles.value}>{ticket.departure}</span>
    </div>
    <div className={styles.row}>
      <span className={styles.label}>Nơi đến:</span>
      <span className={styles.value}>{ticket.destination}</span>
    </div>
    <div className={styles.row}>
      <span className={styles.label}>Giờ khởi hành:</span>
      <span className={styles.value}>{ticket.departureTime}</span>
    </div>
    <div className={styles.row}>
      <span className={styles.label}>Số xe:</span>
      <span className={styles.value}>{ticket.busNumber}</span>
    </div>
    <div className={styles.row}>
      <span className={styles.label}>Biển số xe:</span>
      <span className={styles.value}>{ticket.licensePlate}</span>
    </div>
  </Box>
);

const TicketActions = () => (
  <div className={styles.conbut}>

    <div className={styles.cancelButton}>
      <Button
        variant="contained"
        sx={{
          backgroundColor: "#D7987D",
          borderRadius: "25px",
        }}
      >
        Đổi vé
      </Button>
    </div>

    <div className={styles.cancelButton}>
      <Button
        variant="contained"
        color="error"
        sx={{
          borderRadius: "25px",
        }}
      >
        Hủy vé
      </Button>
    </div>
  </div>
);

const HistoryBookingScreen = () => {
  const results = [
    {
      ticketId: "OD143267",
      seatNumber: "A15",
      departure: "Bến xe Miền Tây",
      destination: "VP Thốt Nốt",
      departureTime: "13:30 9/12/2024",
      busNumber: "79",
      licensePlate: "55A0 - 435.89",
      status: "Đã thanh toán",
    },
    {
      ticketId: "OD143268",
      seatNumber: "B10",
      departure: "Bến xe Miền Tây",
      destination: "VP Thốt Nốt",
      departureTime: "14:00 10/12/2024",
      busNumber: "80",
      licensePlate: "56B0 - 123.45",
      status: "Đã khởi hành",
    },
  ];

  const recentTickets = results.filter((ticket) => ticket.status !== "Đã khởi hành");
  const departedTickets = results.filter((ticket) => ticket.status === "Đã khởi hành");

  return (
    <div className={styles.container}>
      <div className={styles.backIcon}>
        <Button>
          <ArrowBackIosIcon />
        </Button>
      </div>
      <div className={styles.title}>LỊCH SỬ ĐẶT VÉ</div>

      {results.length > 0 ? (
        <Box className={styles.resultContainer}>
          <div style={{ marginBottom: "20px" }}>
            <Typography
              variant="h6"
              style={{
                fontWeight: "bold",
                marginBottom: "10px",
                textTransform: "uppercase",
              }}
            >
              Gần đây nhất
            </Typography>
            {recentTickets.map((ticket, index) => (
              <Card
                key={index}
                style={{
                  marginBottom: "15px",
                  padding: "10px",
                  borderRadius: "10px",
                  boxShadow: "0px 2px 5px rgba(0,0,0,0.2)",
                }}
              >
                <CardContent>
                  <TicketDetails ticket={ticket} />
                  <TicketActions />
                </CardContent>
              </Card>
            ))}
          </div>

          <div style={{ marginBottom: "20px" }}>
            <Typography
              variant="h6"
              style={{
                fontWeight: "bold",
                marginBottom: "10px",
                textTransform: "uppercase",
              }}
            >
              Đã khởi hành
            </Typography>
            {departedTickets.map((ticket, index) => (
              <Card
                key={index}
                style={{
                  marginBottom: "15px",
                  padding: "10px",
                  borderRadius: "10px",
                  boxShadow: "0px 2px 5px rgba(0,0,0,0.2)",
                }}
              >
                <CardContent>
                  <TicketDetails ticket={ticket} />
                  <Typography
                    style={{
                      marginTop: "10px",
                      fontWeight: "bold",
                      color: "#555",
                    }}
                  >
                    Trạng thái: Đã khởi hành
                  </Typography>
                </CardContent>
              </Card>
            ))}
          </div>
        </Box>
      ) : (
        <Typography style={{ textAlign: "center", marginTop: "20px" }}>
          Chưa có dữ liệu lịch sử đặt vé.
        </Typography>
      )}
    </div>
  );
};

export default HistoryBookingScreen;
