import { toast, ToastContainer, type ToastOptions } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

// Common toast style for all types
const baseStyle: React.CSSProperties = {
  borderRadius: "12px",
  fontWeight: "bold",
  fontFamily: "'Poppins', sans-serif",
  backdropFilter: "blur(6px)",
  background: "rgba(30, 30, 30, 0.7)",
  color: "#fff",
  border: "1px solid rgba(255, 255, 255, 0.1)",
  boxShadow: "0 4px 12px rgba(0, 0, 0, 0.3)",
};

// Variant-specific overrides
const toastOptions: Record<
  "success" | "error" | "info" | "warn",
  ToastOptions
> = {
  success: {
    style: {
      ...baseStyle,
      background: "rgba(34, 197, 94, 0.1)",
      color: "#4ade80",
      border: "2px solid #4ade80",
    },
    icon: <span>✅</span>,
  },
  error: {
    style: {
      ...baseStyle,
      background: "rgba(239, 68, 68, 0.1)",
      color: "#f87171",
      border: "2px solid #f87171",
    },
    icon: <span>❌</span>,
  },
  info: {
    style: {
      ...baseStyle,
      background: "rgba(59, 130, 246, 0.1)",
      color: "#60a5fa",
      border: "2px solid #60a5fa",
    },
    icon: <span>ℹ️</span>,
  },
  warn: {
    style: {
      ...baseStyle,
      background: "rgba(251, 191, 36, 0.1)",
      color: "#facc15",
      border: "2px solid #facc15",
    },
    icon: <span>⚠️</span>,
  },
};

// Toast handler
const Toast = {
  success: (msg: string) => toast.success(msg, toastOptions.success),
  error: (msg: string) => toast.error(msg, toastOptions.error),
  info: (msg: string) => toast.info(msg, toastOptions.info),
  warn: (msg: string) => toast.warn(msg, toastOptions.warn),
};

// Toast container provider
export const ToastProvider = () => (
  <ToastContainer
    position="top-right"
    autoClose={3000}
    hideProgressBar={true}
    newestOnTop={true}
    closeOnClick
    pauseOnFocusLoss
    draggable
    pauseOnHover
    theme="colored"
  />
);

export default Toast;
