import React from "react";
import useEscapeKey from "../hooks/useEscapeKey";

export const ToastContext = React.createContext();

function ToastProvider({ children }) {
  const [toasts, setToasts] = React.useState([]);

  useEscapeKey(clearToasts)

  function addToast(message, variant = "notice") {
    const id = Date.now();
    setToasts([...toasts, { id, message, variant }]);
  }

  function dismissToast(id) {
    setToasts(toasts.filter((toast) => toast.id !== id));
  }

  function clearToasts() {
    setToasts([])
  }

  return (
    <ToastContext.Provider value={{ toasts, addToast, dismissToast, clearToasts }}>
      {children}
    </ToastContext.Provider>
  );
}

export default ToastProvider;
