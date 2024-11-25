import React, { useState } from "react";
import {  Box, Button, Table,  TableBody, TableCell,TableContainer, TableHead,TableRow,Paper,TextField,MenuItem,Select,} from "@mui/material";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import { useNavigate } from "react-router-dom";
import styles from "./manageAccScreen.module.css";
import  AddAccountModal from './modalAdd';
import ActionModal from './modalAction';
import DeleteModal from './modalDelete';
import EditModal from './modalEdit';

const ManageAccScreen = () => {

const navigate = useNavigate();
  const [results, setResults] = useState([]);
  const [filterType, setFilterType] = useState("");
  const [searchQuery, setSearchQuery] = useState("");
  const [isAddModalOpen, setAddModalOpen] = useState(false);
  const [selectedUser, setSelectedUser] = useState(null);
  const [isActionModalOpen, setActionModalOpen] = useState(false);
  const [isDeleteModalOpen, setDeleteModalOpen] = useState(false);
  const [isEditModalOpen, setEditModalOpen] = useState(false);

  const mockData = [
    {
      id: "0923-4--3357",
      name: "Hà Đậu Đen",
      gender: "Nam",
      phone: "0901234567",
      email: "hbtran@gmail.com",
      type: "Tài xế",
      status: "Hoạt động",
      createdDate: "2024-11-01",
      license: "B2",
    },
    {
      id: "0923-4--3325",
      name: "Hà Bảo Trân",
      gender: "Nữ",
      phone: "0909876543",
      email: "hbttete@gmail.com",
      type: "Nhân viên",
      status: "Hoạt động",
      createdDate: "2024-10-28",
      hireDate: "2023-01-15",
    },
    {
      id: "0923-4--3327",
      name: "Hà Huỳnh Bảo Trân",
      gender: "Nam",
      phone: "0987654321",
      email: "hbtttt@gmail.com",
      type: "Khách hàng",
      status: "Khóa",
      createdDate: "2024-11-01",
      address: "123 Đường ABC, TP.HCM",
    },
  ];

  const handleFilter = () => {
    let filteredResults = mockData;

    if (filterType) {
      filteredResults = filteredResults.filter(
        (user) => user.type === filterType
      );
    }
    if (searchQuery) {
      filteredResults = filteredResults.filter(
        (user) =>
          user.id.includes(searchQuery) ||
          user.name.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }
    setResults(filteredResults);
  };

  const handleRowClick = (user) => {
    setSelectedUser(user);
    setActionModalOpen(true);
  };

  const handleDelete = () => {
    setResults(results.filter((user) => user.id !== selectedUser.id));
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
      <div className={styles.title}>QUẢN LÝ TÀI KHOẢN</div>

      <Box className={styles.filter}>
        <Select
          value={filterType}
          onChange={(e) => setFilterType(e.target.value)}
          displayEmpty
          sx={{ width: "200px", marginRight: "16px" }}
        >
          <MenuItem value="">Tất cả chức vụ</MenuItem>
          <MenuItem value="Tài xế">Tài xế</MenuItem>
          <MenuItem value="Nhân viên">Nhân viên</MenuItem>
          <MenuItem value="Khách hàng">Khách hàng</MenuItem>
        </Select>
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
                <TableCell><strong>ID</strong></TableCell>
                <TableCell><strong>Họ và tên</strong></TableCell>
                <TableCell><strong>Giới tính</strong></TableCell>
                <TableCell><strong>Số điện thoại</strong></TableCell>
                <TableCell><strong>Email</strong></TableCell>
                <TableCell><strong>Loại</strong></TableCell>
                <TableCell><strong>Trạng thái</strong></TableCell>
                <TableCell><strong>Thông tin bổ sung</strong></TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {results.map((user, index) => (
                <TableRow
                  key={index}
                  onClick={() => handleRowClick(user)}
                  className={styles.tablerow}
                  style={{ cursor: "pointer" }}
                >
                  <TableCell>{user.id}</TableCell>
                  <TableCell>{user.name}</TableCell>
                  <TableCell>{user.gender}</TableCell>
                  <TableCell>{user.phone}</TableCell>
                  <TableCell>{user.email}</TableCell>
                  <TableCell>{user.type}</TableCell>
                  <TableCell>
                    <span
                      style={{
                        color:
                          user.status === "Hoạt động" ? "#D7987D" : "#2E6B75",
                        fontWeight: "bold",
                      }}
                    >
                      {user.status}
                    </span>
                  </TableCell>
                  <TableCell>
                    {user.type === "Tài xế" && `Bằng lái: ${user.license}`}
                    {user.type === "Nhân viên" &&
                      `Ngày tuyển dụng: ${user.hireDate}`}
                    {user.type === "Khách hàng" && `Địa chỉ: ${user.address}`}
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
        selectedUser={selectedUser}
      />

      <EditModal
        open={isEditModalOpen}
        onClose={() => setEditModalOpen(false)}
        user={selectedUser}
      />

      <DeleteModal
        open={isDeleteModalOpen}
        onClose={() => setDeleteModalOpen(false)}
        onConfirm={handleDelete}
      />
    </div>
  );
};

export default ManageAccScreen;