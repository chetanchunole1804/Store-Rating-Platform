import { IconButton, Tooltip } from "@mui/material";
import { Brightness4, Brightness7 } from "@mui/icons-material";
import { useThemeContext } from "../../context/ThemeContext";
import { useState } from "react";

const ThemeToggle = () => {
  const { themeMode, toggleTheme } = useThemeContext();
  const [rotating, setRotating] = useState(false);

  const handleClick = () => {
    setRotating(true);
    toggleTheme();
    setTimeout(() => setRotating(false), 500); // rotation duration
  };

  const iconStyle: React.CSSProperties = {
    transition: "transform 0.5s ease, color 0.3s",
    transform: rotating ? "rotate(360deg)" : "rotate(0deg)",
    color: themeMode === "dark" ? "#facc15" : "#0ea5e9", // amber for dark, sky-blue for light
    fontSize: 24,
  };

  return (
    <Tooltip
      title={`Switch to ${themeMode === "light" ? "dark" : "light"} mode`}
      enterDelay={200}
      arrow
    >
      <IconButton
        onClick={handleClick}
        sx={{
          backgroundColor: themeMode === "dark" ? "rgba(255,255,255,0.1)" : "rgba(0,0,0,0.05)",
          border: "1px solid",
          borderColor: themeMode === "dark" ? "#333" : "#ccc",
          transition: "all 0.3s ease",
          '&:hover': {
            transform: "scale(1.1)",
            boxShadow: themeMode === "dark"
              ? "0 0 8px #facc15"
              : "0 0 8px #0ea5e9",
          },
        }}
      >
        {themeMode === "dark" ? (
          <Brightness7 style={iconStyle} />
        ) : (
          <Brightness4 style={iconStyle} />
        )}
      </IconButton>
    </Tooltip>
  );
};

export default ThemeToggle;
