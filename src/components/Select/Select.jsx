import styles from "./Select.module.css";
export const Select = ({ title, name, options }) => {
  return (
    <label>
      {title}
      <select className={styles.select} name={name}>
        {options.map((item) => (
          <option key={item.id} value={item.value}>
            {item.value}
          </option>
        ))}
      </select>
    </label>
  );
};
