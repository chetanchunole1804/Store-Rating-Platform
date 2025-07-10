import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { AuthProvider } from "./context/AuthContext";
import { ThemeContextProvider, useThemeContext } from "./context/ThemeContext";

import AppLayout from "./components/layout/AppLayout";
import AuthGuard from "./components/layout/AuthGuard";

import LoginPage from "./pages/auth/login/LoginPage";
import SignupPage from "./pages/auth/signup/SignupPage";
import LandingPage from "./pages/LandingPage";

import AdminDashboard from "./pages/admin/dashboard/AdminDashboard";
import AdminUsersPage from "./pages/admin/users/AdminUsersPage";
import AdminStoresPage from "./pages/admin/stores/AdminStoresPage";

import UserStoresPage from "./pages/admin/users/UserStoresPage";
import StoreDashboard from "./pages/admin/dashboard/StoreDashboard";
import ChangePasswordPage from "./pages/auth/ChangePasswordPage/ChangePasswordPage";

function AppContent() {
  const { themeMode } = useThemeContext();

  const theme = createTheme({
    palette: {
      mode: themeMode,
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Routes>
        {/* Public routes */}
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/" element={<LandingPage />} />

        {/* Protected App routes inside layout */}
        <Route
          path="/admin/dashboard"
          element={
            <AuthGuard roles={["admin"]}>
              <AppLayout>
                <AdminDashboard />
              </AppLayout>
            </AuthGuard>
          }
        />
        <Route
          path="/admin/users"
          element={
            <AuthGuard roles={["admin"]}>
              <AppLayout>
                <AdminUsersPage />
              </AppLayout>
            </AuthGuard>
          }
        />
        <Route
          path="/admin/stores"
          element={
            <AuthGuard roles={["admin"]}>
              <AppLayout>
                <AdminStoresPage />
              </AppLayout>
            </AuthGuard>
          }
        />

        <Route
          path="/user/stores"
          element={
            <AuthGuard roles={["user"]}>
              <AppLayout>
                <UserStoresPage />
              </AppLayout>
            </AuthGuard>
          }
        />

        <Route
          path="/store/dashboard"
          element={
            <AuthGuard roles={["store-owner"]}>
              <AppLayout>
                <StoreDashboard />
              </AppLayout>
            </AuthGuard>
          }
        />

        <Route
          path="/change-password"
          element={
            <AuthGuard>
              <AppLayout>
                <ChangePasswordPage />
              </AppLayout>
            </AuthGuard>
          }
        />
      </Routes>
    </ThemeProvider>
  );
}

export default function App() {
  return (
    <Router>
      <AuthProvider>
        <ThemeContextProvider>
          <AppContent />
        </ThemeContextProvider>
      </AuthProvider>
    </Router>
  );
}
