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
import { getAllStores } from "../../services/storeService";
import RatingStars from "../shared/RatingStars";
import Toast from "../shared/Toast";

const StoreTable = () => {
  const [stores, setStores] = useState<any[]>([]);

  useEffect(() => {
    (async () => {
      try {
        const data = await getAllStores();
        setStores(data);
      } catch {
        Toast.error("Failed to load stores.");
      }
    })();
  }, []);

  return (
    <TableContainer component={Paper}>
      <Table>
        <TableHead sx={{ backgroundColor: "#f3f4f6" }}>
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell>Location</TableCell>
            <TableCell>Average Rating</TableCell>
            <TableCell>Actions</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {stores.map((s) => (
            <TableRow key={s.id}>
              <TableCell>{s.name}</TableCell>
              <TableCell>{s.location}</TableCell>
              <TableCell>
                <RatingStars value={s.avgRating || 0} readOnly />
              </TableCell>
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

export default StoreTable;
