import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

const LandingPage = () => {
  const { role } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (role === "admin") navigate("/admin/dashboard");
    else if (role === "store-owner") navigate("/store/dashboard");
    else if (role === "user") navigate("/user/stores");
    else navigate("/login");
  }, [role]);

  return (
    <div className="flex items-center justify-center h-screen text-xl font-semibold">
      Redirecting...
    </div>
  );
};

export default LandingPage
