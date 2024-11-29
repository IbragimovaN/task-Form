import { useEffect, useMemo, useState } from "react";
import styles from "./Input.module.css";
import { funcValidate } from "../../utils/funcValidate";
import { colorStyleFunc } from "../../utils/colorStyleFunc";
import { borderRadiusFunc } from "../../utils/borderRadiusFunc";
import { inputSizeFunc } from "../../utils/inputSizeFunc";
import { inputRadioSizeFunc } from "../../utils/inputRadioSizeFunc";

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
  const size = useMemo(
    () =>
      type === "radio"
        ? inputRadioSizeFunc(inputSize)
        : inputSizeFunc(inputSize),
    [inputSize, type]
  );

  useEffect(() => {
    if (isDemoInput) {
      setShowError(true);
    }
  }, [isDemoInput]);

  return (
    <div>
      {type !== "radio" ? (
        <label style={{ ...size.forLabel }}>
          {label} <span className={styles.star}>{withAsterics && "*"}</span>
          <div className={styles.description} style={{ ...size.forDescr }}>
            {description}
          </div>
          <input
            type={type}
            name={name}
            placeholder={placeholder}
            className={classname || styles.input}
            label={label}
            id={id}
            onBlur={(e) => funcValidate(e, setShowError)}
            required={withAsterics}
            style={{ ...scheme, ...radius, ...size.forInput }}
            disabled={isDisabled}
          />
          {showError && (
            <div className={styles.error} style={{ ...size.forError }}>
              {error}
            </div>
          )}
        </label>
      ) : (
        <label style={{ ...size.forLabel }}>
          <input
            type="radio"
            id={idForRadio}
            style={{ ...size.forInput }}
          ></input>
          {label}
          <span className={styles.star}>{withAsterics && "*"}</span>
          <div className={styles.description} style={{ ...size.forDescr }}>
            {description}
          </div>
        </label>
      )}
    </div>
  );
};
