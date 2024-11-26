import { Input } from "../Input/Input";
import { Form } from "../Form/Form";

export const Signin = ({ onSubmit }) => {
  return (
    <Form btnValue="Войти" onSubmit={onSubmit}>
      <Input type="email" name="emain" placeholder="Введите email" />
      <Input type="password" name="password" placeholder="Введите пароль" />
    </Form>
  );
};
