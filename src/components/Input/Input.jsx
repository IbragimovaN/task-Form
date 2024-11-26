import styles from "./Input.module.css";
export const Input = ({ type, name, placeholder }) => {
  return (
    <input
      type={type}
      name={name}
      placeholder={placeholder}
      className={styles.input}
    />
  );
};
