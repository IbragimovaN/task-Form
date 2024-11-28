import { useEffect, useMemo, useState } from "react";
import styles from "./Input.module.css";
import { funcValidate } from "../../utils/funcValidate";
import { colorStyleFunc } from "../../utils/colorStyleFunc";
import { borderRadiusFunc } from "../../utils/borderRadiusFunc";
import { inputSizeFunc } from "../../utils/inputSizeFunc";

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
  borderRadius = "0",
  inputSize = "0",
}) => {
  const [showError, setShowError] = useState(false);
  console.log(inputSize);

  const scheme = useMemo(() => colorStyleFunc(colorScheme), [colorScheme]);
  const radius = useMemo(() => borderRadiusFunc(borderRadius), [borderRadius]);
  const size = useMemo(() => inputSizeFunc(inputSize), [inputSize]);

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
          style={{ ...scheme, ...radius, ...size }}
        />
        {showError && <div className={styles.error}>{error}</div>}
      </label>
    </div>
  );
};
