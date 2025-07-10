import { Navigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";

const AuthGuard = ({
  children,
  roles,
}: {
  children: React.ReactNode;
  roles?: string[];
}) => {
  const { user, role } = useAuth();

  if (!user) return <Navigate to="/login" />;
  if (roles && !roles.includes(role)) return <Navigate to="/" />;

  return <>{children}</>;
};

export default AuthGuard;
