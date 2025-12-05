import React from "react";

import Toast from "../Toast";
import styles from "./ToastShelf.module.css";

function ToastShelf({ children }) {
  return (
    <ol className={styles.wrapper}>
      {children?.map((toast) => (
        <li key={toast.key} className={styles.toastWrapper}>{toast}</li>
      ))}
    </ol>
  );
}

export default ToastShelf;
