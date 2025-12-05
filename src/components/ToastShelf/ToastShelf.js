import React from "react";

import Toast from "../Toast";
import styles from "./ToastShelf.module.css";

import { ToastContext } from "../ToastProvider";

function ToastShelf({ children }) {
  const { toasts, dismissToast, clearToasts } = React.useContext(ToastContext);

  React.useEffect(() => {
    function handler(e) {
      if (e.code !== "Escape") {
        return;
      }
      clearToasts();
    }

    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, []);

  return (
    <ol
      className={styles.wrapper}
      role="region"
      aria-live="polite"
      aria-label="Notification"
    >
      {toasts.map((toast) => (
        <li key={toast.id} className={styles.toastWrapper}>
          <Toast
            variant={toast.variant}
            onDismiss={() => dismissToast(toast.id)}
          >
            {toast.message}
          </Toast>
        </li>
      ))}
    </ol>
  );
}

export default ToastShelf;
