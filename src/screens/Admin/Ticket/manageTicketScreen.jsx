import React, { useState } from "react";
import {  Box, Button, Table,  TableBody, TableCell,TableContainer, TableHead,TableRow,Paper,TextField,MenuItem,Select,} from "@mui/material";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import { useNavigate } from "react-router-dom";
import styles from "./manageTicketScreen.module.css";
import  AddAccountModal from "./modalAdd";
import ActionModal from "./modalAction";
import DeleteModal from './modalDelete';
import EditModal from './modalEdit';

const ManageTicketScreen = () => {

const navigate = useNavigate();
  const [results, setResults] = useState([]);
  const [filterType, setFilterType] = useState("");
  const [searchQuery, setSearchQuery] = useState("");
  const [isAddModalOpen, setAddModalOpen] = useState(false);
  const [selectedticket, setSelectedticket] = useState(null);
  const [isActionModalOpen, setActionModalOpen] = useState(false);
  const [isDeleteModalOpen, setDeleteModalOpen] = useState(false);
  const [isEditModalOpen, setEditModalOpen] = useState(false);

  const mockData = [
    {
        busRouteId:'A10',
        departure: 'Bến xe Miền Tây',
        destination: 'VP Thốt Nốt',
        departureTime: '13:30 9/12/2024',
        duration:'4 tiếng',
        price:'120000',
        type:'Ghế thường',
    },
    {
        busRouteId:'A10',
        departure: 'Bến xe Miền Tây',
        destination: 'VP Thốt Nốt',
        departureTime: '13:30 9/12/2024',
        duration:'4 tiếng',
        price:'120000',
        type:'Ghế thường',
    },
    {
        busRouteId:'A10',
        departure: 'Bến xe Miền Tây',
        destination: 'VP Thốt Nốt',
        departureTime: '13:30 9/12/2024',
        duration:'4 tiếng',
        price:'120000',
        type:'Ghế thường',
    },
  ];

  const handleFilter = () => {
    let filteredResults = mockData;

    if (searchQuery) {
      filteredResults = filteredResults.filter(
        (ticket) =>
          ticket.busRouteId.includes(searchQuery) ||
          ticket.departure.toLowerCase().includes(searchQuery.toLowerCase())||
          ticket.destination.toLowerCase().includes(searchQuery.toLowerCase())

      );
    }
    setResults(filteredResults);
  };

  const handleRowClick = (ticket) => {
    setSelectedticket(ticket);
    setActionModalOpen(true);
  };

  const handleDelete = () => {
    setResults(results.filter((ticket) => ticket.id !== selectedticket.id));
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
      <div className={styles.title}>QUẢN LÝ VÉ</div>

      <Box className={styles.filter}>

        <TextField
          label="Tìm theo tên/ID"
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
                <TableCell><strong>Mã tuyến</strong></TableCell>
                <TableCell><strong>Điểm đi</strong></TableCell>
                <TableCell><strong>Điểm đến</strong></TableCell>
                <TableCell><strong>Giờ khởi hành</strong></TableCell>
                <TableCell><strong>Quãng thời gian</strong></TableCell>
                <TableCell><strong>Loại</strong></TableCell>
                <TableCell><strong>Giá vé</strong></TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {results.map((ticket, index) => (
                <TableRow
                  key={index}
                  onClick={() => handleRowClick(ticket)}
                  className={styles.tablerow}
                  style={{ cursor: "pointer" }}
                >
                  <TableCell>{ticket.busRouteId}</TableCell>
                  <TableCell>{ticket.departure}</TableCell>
                  <TableCell>{ticket.destination}</TableCell>
                  <TableCell>{ticket.departureTime}</TableCell>
                  <TableCell>{ticket.duration}</TableCell>
                  <TableCell>{ticket.type}</TableCell>
                  <TableCell>{ticket.price}</TableCell>
                  <TableCell>
                    <span
                      style={{
                        color:
                          ticket.status === "Hoạt động" ? "#D7987D" : "#2E6B75",
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
        selectedticket={selectedticket}
      />

      <EditModal
        open={isEditModalOpen}
        onClose={() => setEditModalOpen(false)}
        ticket={selectedticket}
      />

      <DeleteModal
        open={isDeleteModalOpen}
        onClose={() => setDeleteModalOpen(false)}
        onConfirm={handleDelete}
      />
    </div>
  );
};

export default ManageTicketScreen;