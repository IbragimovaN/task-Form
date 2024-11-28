import { useState } from "react";
import styles from "./SwitchToggle.module.css";
export const SwitchToggle = ({ label, name }) => {
  const [checked, setChecked] = useState(false);

  return (
    <label className={styles.label}>
      <div
        className={styles.checkboxSwitch}
        style={
          checked
            ? { backgroundColor: "#007bff" }
            : { backgroundColor: "rgb(255, 255, 255)" }
        }
      >
        <div
          className={styles.circle}
          style={checked ? { right: "1px" } : { left: "1px" }}
        />
      </div>
      {label}
      <input
        name={name}
        type="checkbox"
        onChange={(e) => setChecked(e.target.checked)}
        className={styles.input}
      />
    </label>
  );
};
