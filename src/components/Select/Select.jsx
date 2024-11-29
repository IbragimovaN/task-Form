import styles from "./Select.module.css";
export const Select = ({
  title,
  name,
  options,
  isDisabled,
  withAsterics,
  description,
}) => {
  return (
    <label>
      {title}
      <span className={styles.star}>{withAsterics && "*"}</span>
      <div className={styles.description}>{description}</div>
      <select
        required={withAsterics}
        disabled={isDisabled}
        className={styles.select}
        name={name}
      >
        {options.map((item) => (
          <option key={item.id} value={item.value}>
            {item.value}
          </option>
        ))}
      </select>
    </label>
  );
};
