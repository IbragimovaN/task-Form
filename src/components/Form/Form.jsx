import { forwardRef, memo } from "react";
import { Button } from "../Button/Button";
import styles from "./Form.module.css";

const Form = forwardRef(
  ({ children, btnValue, data, setData, handleSubmit, onReset }, ref) => {
    const handleChange = (e) => {
      console.log(e.target);
      if (e.target.type === "radio") {
        setData({
          ...data,
          [e.target.id]: e.target.checked,
        });
      } else if (
        e.target.name === "isDisabled" ||
        e.target.name === "withAsterics"
      ) {
        setData({
          ...data,
          [e.target.name]: e.target.checked,
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
