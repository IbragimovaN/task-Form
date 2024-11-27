import { useEffect, useState } from "react";
import styles from "./Input.module.css";
import { funcValidate } from "../../utils/funcValidate";

export const Input = ({
  type,
  name,
  placeholder,
  label,
  classname,
  id,
  error,
  description,
  required,
  isDemoInput,
  colorScheme,
}) => {
  const [showError, setShowError] = useState(false);
  console.log(colorScheme);

  const colorStyleFunc = (colorScheme) => {
    if (colorScheme === "filled") {
      return {
        backgroundColor: "#f1f3f5",
        color: "#b3b9c0",
        border: "none",
      };
    } else if (colorScheme === "unstyled") {
      return {
        backgroundColor: "#fff",
        color: "#b3b9c0",
        border: "none",
      };
    }
  };

  const scheme = colorStyleFunc(colorScheme);

  useEffect(() => {
    if (isDemoInput) {
      setShowError(true);
    }
  }, []);

  return (
    <div>
      <label className={styles.label}>
        {label}
        <div className={styles.description}>{description}</div>
        <input
          type={type}
          name={name}
          placeholder={placeholder}
          className={classname || styles.input}
          label={label}
          id={id}
          onBlur={(e) => funcValidate(e, setShowError)}
          required={required}
          style={scheme}
        />
        {showError && <div className={styles.error}>{error}</div>}
      </label>
    </div>
  );
};
