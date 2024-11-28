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
  isDemoInput,
  colorScheme,
  borderRadius = "0",
  inputSize = "0",
  isDisabled,
  withAsterics,
  idForRadio,
}) => {
  const [showError, setShowError] = useState(false);

  const scheme = useMemo(() => colorStyleFunc(colorScheme), [colorScheme]);
  const radius = useMemo(() => borderRadiusFunc(borderRadius), [borderRadius]);
  const size = useMemo(() => inputSizeFunc(inputSize), [inputSize]);

  console.log(type);

  useEffect(() => {
    if (isDemoInput) {
      setShowError(true);
    }
  }, []);

  return (
    <div>
      {type !== "radio" ? (
        <label className={isDisabled && styles.labelDisabled}>
          {label} <span className={styles.star}>{withAsterics && "*"}</span>
          <div className={styles.description}>{description}</div>
          <input
            type={type}
            name={name}
            placeholder={placeholder}
            className={classname || styles.input}
            label={label}
            id={id}
            onBlur={(e) => funcValidate(e, setShowError)}
            required={withAsterics}
            style={{ ...scheme, ...radius, ...size }}
            disabled={isDisabled}
          />
          {showError && <div className={styles.error}>{error}</div>}
        </label>
      ) : (
        <label>
          <input type="radio" id={idForRadio}></input>
          {label}
          <span className={styles.star}>{withAsterics && "*"}</span>
          <div className={styles.description}>{description}</div>
        </label>
      )}
    </div>
  );
};
