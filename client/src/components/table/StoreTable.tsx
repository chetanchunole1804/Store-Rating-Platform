import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  IconButton,
  Paper,
  useTheme,
} from "@mui/material";
import { Edit, Delete } from "@mui/icons-material";
import { useEffect, useState } from "react";
import { getAllStores } from "../../services/storeService";
import RatingStars from "../shared/RatingStars";
import Toast from "../shared/Toast";

const StoreTable = () => {
  const [stores, setStores] = useState<any[]>([]);
  const theme = useTheme();

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
    <TableContainer
      component={Paper}
      sx={{
        backgroundColor: theme.palette.mode === "dark" ? "#1e1e1e" : "#fff",
        borderRadius: 2,
        boxShadow: theme.palette.mode === "dark" ? "0 0 10px #0005" : "0 0 4px #ccc",
      }}
    >
      <Table>
        <TableHead>
          <TableRow sx={{ backgroundColor: theme.palette.mode === "dark" ? "#2e2e2e" : "#f9fafb" }}>
            <TableCell sx={{ fontWeight: 600 }}>Name</TableCell>
            <TableCell sx={{ fontWeight: 600 }}>Location</TableCell>
            <TableCell sx={{ fontWeight: 600 }}>Average Rating</TableCell>
            <TableCell sx={{ fontWeight: 600 }}>Actions</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {stores.map((s) => (
            <TableRow
              key={s.id}
              hover
              sx={{
                transition: "background 0.2s",
                "&:hover": {
                  backgroundColor:
                    theme.palette.mode === "dark" ? "#2a2a2a" : "#f1f5f9",
                },
              }}
            >
              <TableCell>{s.name}</TableCell>
              <TableCell>{s.location}</TableCell>
              <TableCell>
                <RatingStars value={s.avgRating || 0} readOnly />
              </TableCell>
              <TableCell>
                <IconButton color="primary" size="small">
                  <Edit fontSize="small" />
                </IconButton>
                <IconButton color="error" size="small">
                  <Delete fontSize="small" />
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
