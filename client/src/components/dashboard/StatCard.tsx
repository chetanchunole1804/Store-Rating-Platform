import { Card, CardContent, Typography, Box } from "@mui/material";
import {
  Star,
  People,
  Store,
  BarChart,
  ShoppingCart,
  EmojiEvents,
} from "@mui/icons-material";

interface StatCardProps {
  icon: "star" | "people" | "store" | "chart" | "cart" | "trophy";
  label: string;
  value: string | number;
}

const iconMap = {
  star: <Star fontSize="large" color="primary" />,
  people: <People fontSize="large" color="primary" />,
  store: <Store fontSize="large" color="primary" />,
  chart: <BarChart fontSize="large" color="primary" />,
  cart: <ShoppingCart fontSize="large" color="primary" />,
  trophy: <EmojiEvents fontSize="large" color="primary" />,
};

const StatCard = ({ icon, label, value }: StatCardProps) => {
  return (
    <Card sx={{ display: "flex", alignItems: "center", p: 2 }}>
      <Box sx={{ mr: 2 }}>{iconMap[icon]}</Box>
      <CardContent sx={{ p: 0 }}>
        <Typography variant="h6">{label}</Typography>
        <Typography variant="h5" fontWeight="bold">
          {value}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default StatCard;
