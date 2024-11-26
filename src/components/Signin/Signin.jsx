import { Input } from "../Input/Input";
import { Form } from "../Form/Form";
import { useState } from "react";

export const Signin = ({ handleSubmit }) => {
  const [data, setData] = useState({
    email: "",
    password: "",
  });
  return (
    <Form
      btnValue="Войти"
      handleSubmit={handleSubmit}
      data={data}
      setData={setData}
    >
      <Input type="email" name="email" placeholder="Email" label="Email" />
      <Input
        type="Password"
        name="Password"
        placeholder="Пароль"
        label="Пароль"
      />
    </Form>
  );
};
