import { Rating } from "@mui/material";

interface RatingStarsProps {
  value: number;
  onChange?: (newValue: number | null) => void;
  readOnly?: boolean;
  size?: "small" | "medium" | "large";
}

const RatingStars = ({
  value,
  onChange,
  readOnly = false,
  size = "medium",
}: RatingStarsProps) => {
  return (
    <Rating
      name="rating"
      value={value}
      precision={0.5}
      readOnly={readOnly}
      size={size}
      onChange={(_, newValue) => onChange?.(newValue)}
    />
  );
};

export default RatingStars;
