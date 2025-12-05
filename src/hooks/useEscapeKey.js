import React from 'react'

export default function useEscapeKey(callback) {
  React.useEffect(() => {
    function handler(e) {
      if (e.code !== "Escape") {
        return;
      }
      callback();
    }

    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, []);
}