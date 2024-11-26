import { useState } from "react";
import { Form } from "../Form/Form";
import { Input } from "../Input/Input";
import styles from "./Signup.module.css";

export const Signup = ({ handleSubmit }) => {
  const [data, setData] = useState({});
  return (
    <Form
      btnValue="Зарегестрироваться"
      handleSubmit={handleSubmit}
      data={data}
      setData={setData}
    >
      <Input type="text" name="name" placeholder="Имя" label="Имя" />
      <Input
        type="text"
        name="nickname"
        placeholder="Никнейм"
        label="Никнейм"
      />
      <Input type="email" name="email" placeholder="Email" label="Email" />
      <div className={styles.radioBtnsWrapper}>
        {" "}
        <Input
          type="radio"
          name="sex"
          label="Мужчина"
          classname={styles.radio}
          id="man"
          // readOnly={data.sex === "on" ? true : false}
        />
        <Input
          type="radio"
          name="sex"
          label="Женщина"
          classname={styles.radio}
          id="women"
        />
      </div>

      <Input
        type="password"
        name="password"
        placeholder="Пароль"
        label="Пароль"
      />
      <Input
        type="password"
        name="passcheck"
        placeholder="Пароль"
        label="Повторите пароль"
      />
    </Form>
  );
};
