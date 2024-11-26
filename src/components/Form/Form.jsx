import { Button } from "../Button/Button";
import styles from "./Form.module.css";

export const Form = ({ children, btnValue, data, setData, handleSubmit }) => {
  const handleChange = (e) => {
    if (e.target.name === "sex") {
      setData({
        ...data,
        [e.target.name]: e.target.id,
      });
    } else {
      setData({
        ...data,
        [e.target.name]: e.target.value,
      });
    }
  };

  return (
    <form
      className={styles.form}
      onChange={(e) => handleChange(e)}
      onSubmit={(e) => handleSubmit(e, data)}
    >
      {children}
      <Button type="submit">{btnValue}</Button>
    </form>
  );
};
