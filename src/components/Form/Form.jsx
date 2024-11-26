import { Button } from "../Button/Button";
import styles from "./Form.module.css";
export const Form = ({ children, btnValue }) => {
  return (
    <form className={styles.form}>
      {children}
      <Button type="submit">{btnValue}</Button>
    </form>
  );
};
