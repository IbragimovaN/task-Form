import { Input } from "../Input/Input";
import Form from "../Form/Form";
import { useEffect, useState } from "react";
import { ControlPanel } from "../ControlPanel/ControlPanel";
import styles from "./Signin.module.css";
import { initialStateDemoInput } from "../../constants";

export const Signin = ({ handleSubmit }) => {
  const [data, setData] = useState({
    email: "",
    password: "",
  });

  const [demoInput, setDemoInput] = useState(initialStateDemoInput);
  const [inputsArr, setInputsArr] = useState([]);

  return (
    <div className={styles.page}>
      {" "}
      <Form
        btnValue="Войти"
        handleSubmit={handleSubmit}
        data={data}
        setData={setData}
      >
        <h2 className={styles.title}>Демонтрационный инпут</h2>
        <Input
          placeholder={demoInput.placeholder}
          label={demoInput.label}
          error={demoInput.error}
          description={demoInput.description}
          colorScheme={demoInput.colorScheme}
          isDemoInput={true}
        />

        <h2 className={styles.title}>Готовая форма авторизации</h2>
        {inputsArr.map((item) => (
          <Input
            type={item.type}
            name={item.name}
            placeholder={item.placeholder}
            label={item.label}
            key={item.name}
            error={item.error}
            description={item.description}
            colorScheme={item.colorScheme}
          />
        ))}

        {/* <Input type="email" name="email" placeholder="Email" label="Email" />
        <Input
          type="Password"
          name="Password"
          placeholder="Пароль"
          label="Пароль"
        /> */}
      </Form>
      <ControlPanel
        inputsArr={inputsArr}
        setInputsArr={setInputsArr}
        demoInput={demoInput}
        setDemoInput={setDemoInput}
      />
    </div>
  );
};
