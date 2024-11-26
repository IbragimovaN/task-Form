import styles from "./Input.module.css";
export const Input = ({ type, name, placeholder, label, classname, id }) => {
  return (
    <>
      <label>
        {label}
        <input
          type={type}
          name={name}
          placeholder={placeholder}
          className={classname || styles.input}
          label={label}
          id={id}
        />
      </label>
    </>
  );
};
