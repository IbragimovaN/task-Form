import { useState } from "react";
import Form from "../Form/Form";
import { Input } from "../Input/Input";
import styles from "./Signup.module.css";
import { ControlPanel } from "../ControlPanel/ControlPanel";
import { initialStateDemoInput } from "../../constants";

export const Signup = ({ handleSubmit }) => {
  const [data, setData] = useState({});
  const [demoInput, setDemoInput] = useState(initialStateDemoInput);
  const [inputsArr, setInputsArr] = useState([]);
  return (
    <div className={styles.page}>
      <Form
        btnValue="Зарегестрироваться"
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
          isDemoInput={true}
          colorScheme={demoInput.colorScheme}
          borderRadius={demoInput.borderRadius}
          inputSize={demoInput.inputSize}
          isDisabled={demoInput.isDisabled}
          withAsterics={demoInput.withAsterics}
        />

        <h2 className={styles.title}>Готовая форма регистрации</h2>
        {inputsArr.map((item) => (
          <Input
            type={item.type}
            name={item.name}
            placeholder={item.placeholder}
            label={item.label}
            key={item.id}
            error={item.error}
            description={item.description}
            colorScheme={item.colorScheme}
            borderRadius={item.borderRadius}
            inputSize={item.inputSize}
            isDisabled={item.isDisabled}
            withAsterics={item.withAsterics}
          />
        ))}
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
