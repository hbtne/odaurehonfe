// import React, { useState } from "react";
// import {  Box, Button, Table,  TableBody, TableCell,TableContainer, TableHead,TableRow,Paper,TextField,MenuItem,Select,} from "@mui/material";
// import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
// import { useNavigate } from "react-router-dom";
// import styles from "./manageBusTScreen.module.css";
// import  AddAccountModal from "./modalAdd";
// import ActionModal from "./modalAction";
// import DeleteModal from './modalDelete';
// import EditModal from './modalEdit';

// const ManagebusScreen = () => {

// const navigate = useNavigate();
//   const [results, setResults] = useState([]);
//   const [filterType, setFilterType] = useState("");
//   const [searchQuery, setSearchQuery] = useState("");
//   const [isAddModalOpen, setAddModalOpen] = useState(false);
//   const [selectedbus, setSelectedbus] = useState(null);
//   const [isActionModalOpen, setActionModalOpen] = useState(false);
//   const [isDeleteModalOpen, setDeleteModalOpen] = useState(false);
//   const [isEditModalOpen, setEditModalOpen] = useState(false);

//   const mockData = [
//     {
//         busId:'79',
//         numSeat: '30',
//         plateNum:'65KD-F1-8282',
//         type:'Xe thường',
//         busRouteId:'B10,B15',
//     },
//     {
//       busId:'79',
//       numSeat: '30',
//       plateNum:'65KD-F1-8282',
//       type:'Xe thường',
//       busRouteId:'B10,B15',

//     },
//     {
//       busId:'79',
//       numSeat: '30',
//       plateNum:'65KD-F1-8282',
//       type:'Xe thường',
//       busRouteId:'B10,B15',

//     },
//   ];

//   const handleFilter = () => {
//     let filteredResults = mockData;
//     if (filterType) {
//       filteredResults = filteredResults.filter(
//         (bus) => bus.type === filterType
//       );
//     }

//     if (searchQuery) {
//       filteredResults = filteredResults.filter(
//         (bus) =>
//           bus.busRouteId.includes(searchQuery) ||
//           bus.busId.toLowerCase().includes(searchQuery.toLowerCase())
//       );
//     }
//     setResults(filteredResults);
//   };

//   const handleRowClick = (bus) => {
//     setSelectedbus(bus);
//     setActionModalOpen(true);
//   };

//   const handleDelete = () => {
//     setResults(results.filter((bus) => bus.id !== selectedbus.id));
//     setDeleteModalOpen(false);
//     setActionModalOpen(false);
//   };

//   return (
//     <div className={styles.container}>
//       <div className={styles.backIcon}>
//         <Button onClick={() => navigate(-1)}>
//           <ArrowBackIosIcon />
//         </Button>
//       </div>
//       <div className={styles.title}>QUẢN LÝ XE</div>

//       <Box className={styles.filter}>
//       <Select
//           value={filterType}
//           onChange={(e) => setFilterType(e.target.value)}
//           displayEmpty
//           sx={{ width: "200px", marginRight: "16px" }}
//         >
//           <MenuItem value="">Tất cả loại</MenuItem>
//           <MenuItem value="Tài xế">Xe thường</MenuItem>
//           <MenuItem value="Nhân viên">Xe VIP</MenuItem>
//         </Select>
//         <TextField
//           label="Tìm theo xe"
//           onChange={(e) => setSearchQuery(e.target.value)}
//           sx={{ width: "200px", marginRight: "16px" }}
//         />
//         <Button
//           sx={{
//             color: "#ffffff",
//             backgroundColor: "#D7987D",
//             borderRadius: "30px",
//             width: "140px",
//             height: "60px",
//           }}
//           onClick={handleFilter}
//         >
//           Tìm kiếm
//         </Button>
//         <Button
//           sx={{
//             color: "#ffffff",
//             backgroundColor: "#2E6B75",
//             borderRadius: "30px",
//             width: "140px",
//             height: "60px",
//           }}
//           onClick={() => setAddModalOpen(true)}
//         >
//           Thêm
//         </Button>
//       </Box>

//       <AddAccountModal open={isAddModalOpen} onClose={() => setAddModalOpen(false)} />

//       {results.length > 0 ? (
//         <TableContainer
//           component={Paper}
//           className={styles.resultContainer}
//           sx={{ overflowX: "auto" }}
//         >
//           <Table>
//             <TableHead>
//               <TableRow>
//                 <TableCell><strong>Mã xe</strong></TableCell>
//                 <TableCell><strong>Số ghế</strong></TableCell>
//                 <TableCell><strong>Biển số xe</strong></TableCell>
//                 <TableCell><strong>Loại xe</strong></TableCell>
//                 <TableCell><strong>Tuyến xe</strong></TableCell>
//               </TableRow>
//             </TableHead>
//             <TableBody>
//               {results.map((bus, index) => (
//                 <TableRow
//                   key={index}
//                   onClick={() => handleRowClick(bus)}
//                   className={styles.tablerow}
//                   style={{ cursor: "pointer" }}
//                 >
//                   <TableCell>{bus.busId}</TableCell>
//                   <TableCell>{bus.numSeat}</TableCell>
//                   <TableCell>{bus.plateNum}</TableCell>
//                   <TableCell>{bus.type}</TableCell>
//                   <TableCell>{bus.busRouteId}</TableCell>
//                 </TableRow>
//               ))}
//             </TableBody>
//           </Table>
//         </TableContainer>
//       ) : (
//         <p>Không tìm thấy dữ liệu.</p>
//       )}

//       <ActionModal
//         open={isActionModalOpen}
//         onClose={() => setActionModalOpen(false)}
//         onEdit={() => {
//           setEditModalOpen(true);
//           setActionModalOpen(false);
//         }}
//         onDelete={() => {
//           setDeleteModalOpen(true);
//           setActionModalOpen(false);
//         }}
//         selectedbus={selectedbus}
//       />

//       <EditModal
//         open={isEditModalOpen}
//         onClose={() => setEditModalOpen(false)}
//         bus={selectedbus}
//       />

//       <DeleteModal
//         open={isDeleteModalOpen}
//         onClose={() => setDeleteModalOpen(false)}
//         onConfirm={handleDelete}
//       />
//     </div>
//   );
// };

// export default ManagebusScreen;
import React, { useState, useEffect } from "react";
import {
  Box,
  Button,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  TextField,
  MenuItem,
  Select,
} from "@mui/material";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import { useNavigate } from "react-router-dom";
import styles from "./manageBusTScreen.module.css";
import AddAccountModal from "./modalAdd";
import ActionModal from "./modalAction";
import DeleteModal from "./modalDelete";
import EditModal from "./modalEdit";
import axios from "axios";  // Assuming you are using Axios for API calls

const ManagebusScreen = () => {
  const navigate = useNavigate();
  const [results, setResults] = useState([]);
  const [filterType, setFilterType] = useState("");
  const [searchQuery, setSearchQuery] = useState("");
  const [isAddModalOpen, setAddModalOpen] = useState(false);
  const [selectedBus, setSelectedBus] = useState(null);
  const [isActionModalOpen, setActionModalOpen] = useState(false);
  const [isDeleteModalOpen, setDeleteModalOpen] = useState(false);
  const [isEditModalOpen, setEditModalOpen] = useState(false);

  // Fetch bus data from the backend API
  useEffect(() => {
    const fetchBuses = async () => {
      try {
        const response = await axios.get("http://localhost:5278/api/bus"); // Đảm bảo đường dẫn API chính xác
        console.log(response.data); // Log dữ liệu nhận được từ backend
        setResults(response.data); // Cập nhật lại state với dữ liệu nhận được
      } catch (error) {
        console.error("Error fetching bus data", error);
      }
    };
    
    fetchBuses();
  }, []);

  const handleFilter = () => {
    let filteredResults = results;
    if (filterType) {
      filteredResults = filteredResults.filter((bus) => bus.type === filterType);
    }

    if (searchQuery) {
      filteredResults = filteredResults.filter(
        (bus) =>
          bus.busRouteId.includes(searchQuery) ||
          bus.busId.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }
    setResults(filteredResults);
  };

  const handleRowClick = (bus) => {
    setSelectedBus(bus);
    setActionModalOpen(true);
  };

  const handleDelete = () => {
    axios.delete(`http://localhost:5278/api/bus/${selectedBus.busID}`)  // Send DELETE request to backend
      .then(() => {
        setResults(results.filter((bus) => bus.busId !== selectedBus.busID));
        setDeleteModalOpen(false);
        setActionModalOpen(false);
      })
      .catch((error) => {
        console.error("Error deleting bus", error);
      });
  };

  return (
    <div className={styles.container}>
      <div className={styles.backIcon}>
        <Button onClick={() => navigate(-1)}>
          <ArrowBackIosIcon />
        </Button>
      </div>
      <div className={styles.title}>QUẢN LÝ XE</div>

      <Box className={styles.filter}>
        <Select
          value={filterType}
          onChange={(e) => setFilterType(e.target.value)}
          displayEmpty
          sx={{ width: "200px", marginRight: "16px" }}
        >
          <MenuItem value="">Tất cả loại</MenuItem>
          <MenuItem value="Xe thường">Xe thường</MenuItem>
          <MenuItem value="Xe VIP">Xe VIP</MenuItem>
        </Select>
        <TextField
          label="Tìm theo xe"
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
                <TableCell><strong>Mã xe</strong></TableCell>
                <TableCell><strong>Số ghế</strong></TableCell>
                <TableCell><strong>Biển số xe</strong></TableCell>
                <TableCell><strong>Loại xe</strong></TableCell>
                <TableCell><strong>Tuyến xe</strong></TableCell>
               <TableCell><strong>Tài xế</strong></TableCell>

              </TableRow>
            </TableHead>
            <TableBody>
              {results.map((bus, index) => (
                <TableRow
                  key={index}
                  onClick={() => handleRowClick(bus)}
                  className={styles.tablerow}
                  style={{ cursor: "pointer" }}
                >
                  <TableCell>{bus.busID}</TableCell>
                  <TableCell>{bus.numSeat}</TableCell>
                  <TableCell>{bus.plateNum}</TableCell>
                  <TableCell>{bus.type}</TableCell>
                  <TableCell>
                  {bus.busBusRoutes && bus.busBusRoutes.length > 0
                    ? bus.busBusRoutes.map(route => route.busRouteID).join(", ")
                    : "Chưa có"}
                </TableCell>

                <TableCell>
                  {bus.busDrivers && bus.busDrivers.length > 0
                    ? bus.busDrivers.map(driver => driver.driverID).join(", ")
                    : "Chưa có"}
                </TableCell>

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
        selectedbus={selectedBus}
      />

      <EditModal
        open={isEditModalOpen}
        onClose={() => setEditModalOpen(false)}
        bus={selectedBus}
      />

      <DeleteModal
        open={isDeleteModalOpen}
        onClose={() => setDeleteModalOpen(false)}
        onConfirm={handleDelete}
      />
    </div>
  );
};

export default ManagebusScreen;
