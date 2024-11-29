import styles from "./SwitchToggle.module.css";
export const SwitchToggle = ({ label, name, checked }) => {
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
      <input name={name} type="checkbox" className={styles.input} />
    </label>
  );
};
