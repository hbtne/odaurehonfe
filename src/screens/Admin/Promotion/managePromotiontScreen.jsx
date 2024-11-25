import React, { useState } from "react";
import {  Box, Button, Table,  TableBody, TableCell,TableContainer, TableHead,TableRow,Paper,TextField,MenuItem,Select,} from "@mui/material";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import { useNavigate } from "react-router-dom";
import styles from "./manageTicketScreen.module.css";
import  AddAccountModal from "./modalAdd";
import ActionModal from "./modalAction";
import DeleteModal from './modalDelete';
import EditModal from './modalEdit';

const ManagePromotionScreen = () => {

const navigate = useNavigate();
  const [results, setResults] = useState([]);
  const [filterType, setFilterType] = useState("");
  const [searchQuery, setSearchQuery] = useState("");
  const [isAddModalOpen, setAddModalOpen] = useState(false);
  const [selectedPromotion, setSelectedPromotion] = useState(null);
  const [isActionModalOpen, setActionModalOpen] = useState(false);
  const [isDeleteModalOpen, setDeleteModalOpen] = useState(false);
  const [isEditModalOpen, setEditModalOpen] = useState(false);

  const mockData = [
    {
        promotionId:'10',
        name: 'Khuyến mãi ngưởi mới',
        startdate: '13:30 9/12/2024',
        enddate: '13:30 9/12/2024',
        discountpercent:'10%',
        discount:'',
    },
    {
      promotionId:'10',
      name: 'Khuyến mãi ngưởi mới',
      startdate: '13:30 9/12/2024',
      enddate: '13:30 9/12/2024',
      discountpercent:'10%',
      discount:'',
    },
   
  ];

  const handleFilter = () => {
    let filteredResults = mockData;

    if (searchQuery) {
      filteredResults = filteredResults.filter(
        (Promotion) =>
          Promotion.promotionId.includes(searchQuery) ||
          Promotion.name.toLowerCase().includes(searchQuery.toLowerCase())

      );
    }
    setResults(filteredResults);
  };

  const handleRowClick = (Promotion) => {
    setSelectedPromotion(Promotion);
    setActionModalOpen(true);
  };

  const handleDelete = () => {
    setResults(results.filter((Promotion) => Promotion.id !== selectedPromotion.id));
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
      <div className={styles.title}>QUẢN LÝ KHUYẾN MÃI</div>

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
                <TableCell><strong>Mã khuyến mãi</strong></TableCell>
                <TableCell><strong>Tên khuyến mãi</strong></TableCell>
                <TableCell><strong>Ngày bắt đầu</strong></TableCell>
                <TableCell><strong>Ngày kết thúc</strong></TableCell>
                <TableCell><strong>Khuyến mãi</strong></TableCell>
                <TableCell><strong>Khuyến mãi theo phần trăm</strong></TableCell>
                <TableCell><strong>Đối tượng áp dụng</strong></TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {results.map((Promotion, index) => (
                <TableRow
                  key={index}
                  onClick={() => handleRowClick(Promotion)}
                  className={styles.tablerow}
                  style={{ cursor: "pointer" }}
                >
                  <TableCell>{Promotion.promotionId}</TableCell>
                  <TableCell>{Promotion.name}</TableCell>
                  <TableCell>{Promotion.startdate}</TableCell>
                  <TableCell>{Promotion.enddate}</TableCell>
                  <TableCell>{Promotion.dicountpercent}</TableCell>
                  <TableCell>{Promotion.discount}</TableCell>
                  <TableCell>
                    <span
                      style={{
                        color:
                          Promotion.status === "Hoạt động" ? "#D7987D" : "#2E6B75",
                        fontWeight: "bold",
                      }}
                    >
                      {Promotion.status}
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
        selectedPromotion={selectedPromotion}
      />

      <EditModal
        open={isEditModalOpen}
        onClose={() => setEditModalOpen(false)}
        Promotion={selectedPromotion}
      />

      <DeleteModal
        open={isDeleteModalOpen}
        onClose={() => setDeleteModalOpen(false)}
        onConfirm={handleDelete}
      />
    </div>
  );
};

export default ManagePromotionScreen;