import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  IconButton,
} from "@mui/material";
import { Edit, Delete } from "@mui/icons-material";
import { useEffect, useState } from "react";
import { getAllUsers } from "../../services/userService";
import Toast from "../shared/Toast";

const UserTable = () => {
  const [users, setUsers] = useState<any[]>([]);

  useEffect(() => {
    (async () => {
      try {
        const data = await getAllUsers();
        setUsers(data);
      } catch {
        Toast.error("Failed to load users.");
      }
    })();
  }, []);

  return (
    <TableContainer component={Paper}>
      <Table>
        <TableHead sx={{ backgroundColor: "#f3f4f6" }}>
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell>Email</TableCell>
            <TableCell>Address</TableCell>
            <TableCell>Role</TableCell>
            <TableCell>Actions</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {users.map((u) => (
            <TableRow key={u.id}>
              <TableCell>{u.name}</TableCell>
              <TableCell>{u.email}</TableCell>
              <TableCell>{u.address}</TableCell>
              <TableCell>{u.role}</TableCell>
              <TableCell>
                <IconButton>
                  <Edit />
                </IconButton>
                <IconButton>
                  <Delete />
                </IconButton>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default UserTable;
