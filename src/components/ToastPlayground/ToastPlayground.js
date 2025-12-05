import React from "react";

import Button from "../Button";
import Toast from "../Toast";
import ToastShelf from "../ToastShelf";

import { ToastContext } from "../ToastProvider";

import styles from "./ToastPlayground.module.css";

const VARIANT_OPTIONS = ["notice", "warning", "success", "error"];

function ToastPlayground() {
  const [message, setMessage] = React.useState("");
  const [variant, setVariant] = React.useState("notice");
  const { addToast } = React.useContext(ToastContext);

  function handleSubmit(e) {
    e.preventDefault();
    addToast(message, variant);
    setMessage("");
    setVariant("notice");
  }

  return (
    <div className={styles.wrapper}>
      <header>
        <img alt="Cute toast mascot" src="/toast.png" />
        <h1>Toast Playground</h1>
      </header>

      <ToastShelf />

      <form className={styles.controlsWrapper} onSubmit={handleSubmit}>
        <div className={styles.row}>
          <label
            htmlFor="message"
            className={styles.label}
            style={{ alignSelf: "baseline" }}
          >
            Message
          </label>
          <div className={styles.inputWrapper}>
            <textarea
              id="message"
              className={styles.messageInput}
              value={message}
              required
              autoFocus
              onChange={(e) => setMessage(e.target.value)}
            />
          </div>
        </div>

        <div className={styles.row}>
          <div className={styles.label}>Variant</div>
          <div className={`${styles.inputWrapper} ${styles.radioWrapper}`}>
            {VARIANT_OPTIONS.map((opt) => (
              <label key={opt} htmlFor={`variant-${opt}`}>
                <input
                  id={`variant-${opt}`}
                  type="radio"
                  name="variant"
                  value={opt}
                  checked={variant === opt}
                  onChange={() => setVariant(opt)}
                />
                {opt}
              </label>
            ))}
          </div>
        </div>

        <div className={styles.row}>
          <div className={styles.label} />
          <div className={`${styles.inputWrapper} ${styles.radioWrapper}`}>
            <Button>Pop Toast!</Button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default ToastPlayground;
