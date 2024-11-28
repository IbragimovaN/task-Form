import { useState } from "react";
import styles from "./RangeInput.module.css";
import { dataArrForRangeInput } from "../../constants";
export const RangeInput = ({ name, label }) => {
  const [value, setValue] = useState(0);

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  return (
    <label className={styles.label}>
      {label}
      <div className={styles.wrapperInput}>
        <input
          className={styles.input}
          type="range"
          name={name}
          min="0"
          max="4"
          step="1"
          defaultValue="0"
          onChange={handleChange}
        />
        <div className={styles.stepIndicators}>
          {dataArrForRangeInput.map(({ number, text }) => (
            <div
              key={number}
              className={`${styles.step} ${
                value == number ? styles.active : ""
              }`}
            >
              {" "}
              <div
                className={styles.stepInfo}
                style={{ opacity: value != number ? "0" : 10 }}
              >
                {text}
              </div>
            </div>
          ))}
          <div
            className={styles.progressLine}
            style={{ width: `${25 * value}%` }}
          ></div>
        </div>
      </div>
    </label>
  );
};
