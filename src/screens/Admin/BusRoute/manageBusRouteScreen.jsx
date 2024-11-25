import React, { useState } from "react";
import {  Box, Button, Table,  TableBody, TableCell,TableContainer, TableHead,TableRow,Paper,TextField,MenuItem,Select,Checkbox, FormControlLabel,} from "@mui/material";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import { useNavigate } from "react-router-dom";
import styles from "./manageBusRouteScreen.module.css";
import  AddAccountModal from "./modalAdd";
import ActionModal from "./modalAction";
import DeleteModal from './modalDelete';
import EditModal from './modalEdit';

const ManagebusRouteScreen = () => {

const navigate = useNavigate();
  const [results, setResults] = useState([]);
  const [filterType, setFilterType] = useState("");
  const [searchQuery, setSearchQuery] = useState("");
  const [isAddModalOpen, setAddModalOpen] = useState(false);
  const [selectedbusRoute, setSelectedbusRoute] = useState(null);
  const [isActionModalOpen, setActionModalOpen] = useState(false);
  const [isDeleteModalOpen, setDeleteModalOpen] = useState(false);
  const [isEditModalOpen, setEditModalOpen] = useState(false);
  const [selectedTimeFrames, setSelectedTimeFrames] = useState({
    "0:00 - 6:00": false,
    "6:00 - 12:00": false,
    "12:00 - 18:00": false,
    "18:00 - 0:00": false,
  });

  const mockData = [
    {
      busRouteId: "79",
      departure: "Bến xe Miền Tây",
      destination: "VP Thốt Nốt",
      departureTime: "2024-12-09T05:30",
      duration: "4 tiếng",
      busId: "A10, A20",
    },
    {
      busRouteId: "80",
      departure: "Bến xe Miền Đông",
      destination: "VP Cần Thơ",
      departureTime: "2024-12-09T14:00",
      duration: "5 tiếng",
      busId: "B10, B20",
    },
  ];

  const handleFilter = () => {
    let filteredResults = mockData;

    if (searchQuery) {
      filteredResults = filteredResults.filter(
        (busRoute) =>
          busRoute.busRouteRouteId.includes(searchQuery) 
      );
    }
    const activeTimeFrames = Object.keys(selectedTimeFrames).filter(
      (key) => selectedTimeFrames[key]
    );

    if (activeTimeFrames.length > 0) {
      filteredResults = filteredResults.filter((busRoute) => {
        const departureHour = new Date(busRoute.departureTime).getHours();

        return activeTimeFrames.some((timeFrame) => {
          const [start, end] = timeFrame.split(" - ").map((time) =>
            time === "0:00" ? 0 : parseInt(time.split(":")[0])
          );
          return (
            (start <= departureHour && departureHour < end) ||
            (end === 0 && departureHour >= 18)
          );
        });
      });
    }
    setResults(filteredResults);
  };
  const handleTimeFrameChange = (timeFrame) => {
    setSelectedTimeFrames((prev) => ({
      ...prev,
      [timeFrame]: !prev[timeFrame],
    }));
  };

  const handleRowClick = (busRoute) => {
    setSelectedbusRoute(busRoute);
    setActionModalOpen(true);
  };

  const handleDelete = () => {
    setResults(results.filter((busRoute) => busRoute.id !== selectedbusRoute.id));
    setDeleteModalOpen(false);
    setActionModalOpen(false);
  };

  return (
    <div className={styles.container}>
      <div className={styles.backIcon}>
        <Button onClick={() => navigate(-1)}>
          <ArrowBackIosIcon />
        </Button>
      </div>
      <div className={styles.title}>QUẢN LÝ TUYẾN XE</div>

      <Box className={styles.filter}>

        <TextField
          label="Tìm theo tuyến"
          onChange={(e) => setSearchQuery(e.target.value)}
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
          onClick={() => setAddModalOpen(true)}
        >
          Thêm
        </Button>
      </Box>
  <Box className={styles.timeFilter}>
        <strong>Khung thời gian</strong>
        {Object.keys(selectedTimeFrames).map((timeFrame) => (
          <FormControlLabel
            key={timeFrame}
            control={
              <Checkbox
                checked={selectedTimeFrames[timeFrame]}
                onChange={() => handleTimeFrameChange(timeFrame)}
              />
            }
            label={timeFrame}
          />
        ))}
      </Box>
      <AddAccountModal open={isAddModalOpen} onClose={() => setAddModalOpen(false)} />

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

              </TableRow>
            </TableHead>
            <TableBody>
              {results.map((busRoute, index) => (
                <TableRow
                  key={index}
                  onClick={() => handleRowClick(busRoute)}
                  className={styles.tablerow}
                  style={{ cursor: "pointer" }}
                >
               <TableCell>{busRoute.busRouteId}</TableCell>
                  <TableCell>{busRoute.departureTime}</TableCell>
                  <TableCell>{busRoute.departure}</TableCell>
                  <TableCell>{busRoute.destination}</TableCell>
                  <TableCell>{busRoute.busId}</TableCell>

                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      ) : (
        <p>Không tìm thấy dữ liệu.</p>
      )}

      <ActionModal
        open={isActionModalOpen}
        onClose={() => setActionModalOpen(false)}
        onEdit={() => {
          setEditModalOpen(true);
          setActionModalOpen(false);
        }}
        onDelete={() => {
          setDeleteModalOpen(true);
          setActionModalOpen(false);
        }}
        selectedbusRoute={selectedbusRoute}
      />

      <EditModal
        open={isEditModalOpen}
        onClose={() => setEditModalOpen(false)}
        busRoute={selectedbusRoute}
      />

      <DeleteModal
        open={isDeleteModalOpen}
        onClose={() => setDeleteModalOpen(false)}
        onConfirm={handleDelete}
      />
    </div>
  );
};

export default ManagebusRouteScreen;