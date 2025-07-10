import { Navigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";

const AuthGuard = ({
  children,
  roles,
}: {
  children: React.ReactNode;
  roles?: ("user" | "admin" | "store-owner")[];
}) => {
  const { user, role } = useAuth();

  if (!user) return <Navigate to="/login" />;
  if (roles && (!role || !roles.includes(role))) {
    // Redirect based on actual role
    if (role === "admin") return <Navigate to="/admin/dashboard" />;
    if (role === "store-owner") return <Navigate to="/store/dashboard" />;
    if (role === "user") return <Navigate to="/user/stores" />;
    return <Navigate to="/" />;
  }

  return <>{children}</>;
};

export default AuthGuard;
