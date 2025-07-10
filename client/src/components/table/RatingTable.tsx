import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from "@mui/material";
import { useEffect, useState } from "react";
import { getStoreRatings } from "../../services/ratingService";
import RatingStars from "../shared/RatingStars";
import Toast from "../shared/Toast";

const RatingTable = () => {
  const [ratings, setRatings] = useState<any[]>([]);

  useEffect(() => {
    (async () => {
      try {
        // Replace 'yourStoreId' with the actual store ID you want to fetch ratings for
        const data = await getStoreRatings("yourStoreId");
        setRatings(data);
      } catch {
        Toast.error("Failed to load ratings.");
      }
    })();
  }, []);

  return (
    <TableContainer component={Paper}>
      <Table>
        <TableHead sx={{ backgroundColor: "#f3f4f6" }}>
          <TableRow>
            <TableCell>User</TableCell>
            <TableCell>Email</TableCell>
            <TableCell>Rating</TableCell>
            <TableCell>Comment</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {ratings.map((r) => (
            <TableRow key={r.id}>
              <TableCell>{r.user.name}</TableCell>
              <TableCell>{r.user.email}</TableCell>
              <TableCell>
                <RatingStars value={r.value} readOnly />
              </TableCell>
              <TableCell>{r.comment}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default RatingTable;
