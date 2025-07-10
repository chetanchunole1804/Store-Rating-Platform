import { IconButton, Tooltip } from "@mui/material";
import { Brightness4, Brightness7 } from "@mui/icons-material";
import { useThemeContext } from "../../context/ThemeContext";

const ThemeToggle = () => {
  const { themeMode, toggleTheme } = useThemeContext();

  return (
    <Tooltip title={`Switch to ${themeMode === "light" ? "dark" : "light"} mode`}>
      <IconButton onClick={toggleTheme} color="inherit">
        {themeMode === "dark" ? <Brightness7 /> : <Brightness4 />}
      </IconButton>
    </Tooltip>
  );
};

export default ThemeToggle;
