import { forwardRef, memo } from "react";
import { Button } from "../Button/Button";
import styles from "./Form.module.css";

const Form = forwardRef(
  ({ children, btnValue, data, setData, handleSubmit, onReset }, ref) => {
    const handleChange = (e) => {
      console.log(e.target.name, e.target.value);
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
        onReset={onReset}
        ref={ref}
      >
        {children}
        <Button type="submit">{btnValue}</Button>
      </form>
    );
  }
);

export default memo(Form);
