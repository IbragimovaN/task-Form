import styles from "./Button.module.css";
export const Button = ({ children, type, classname, onClick }) => {
  return (
    <button className={classname || styles.btn} type={type} onClick={onClick}>
      {children}
    </button>
  );
};
