import { useRef } from "react";
import styles from "./ControlPanel.module.css";
import { Input } from "../Input/Input";
import Form from "../Form/Form";
import { Select } from "../Select/Select";
import {
  initialStateDemoInput,
  optionForSelectColorScheme,
  optionForSelectNameInput,
  optionForSelectType,
} from "../../constants";
import { RangeInput } from "../RangeInput/RangeInput";
import { SwitchToggle } from "../SwitchToggle/SwitchToggle";

export const ControlPanel = ({
  inputsArr,
  setInputsArr,
  demoInput,
  setDemoInput,
}) => {
  const formRef = useRef();

  const handleReset = () => {
    setDemoInput(initialStateDemoInput);
    formRef.current.reset();
  };

  const createInputClick = (e) => {
    e.preventDefault();
    setInputsArr([
      ...inputsArr,
      { ...demoInput, id: Math.random().toString().slice(3) },
    ]);
    handleReset();
  };

  return (
    <div className={styles.controlPanel}>
      <h2>Добавьте инпуты</h2>
      <Form
        btnValue="добавить инпут"
        data={demoInput}
        setData={setDemoInput}
        handleSubmit={createInputClick}
        onReset={handleReset}
        ref={formRef}
        id="controlPanel"
      >
        <Select
          title="Выберите тип инпута"
          name="type"
          options={optionForSelectType}
          withAsterics={true}
        />
        {demoInput.type === "radio" && (
          <Input
            type="text"
            name="idForRadio"
            placeholder={"Введите значение id для радио-инпута"}
            label="Значение id для радио-инпута"
            description="Латиница, слитно, не должно дублироваться с другими инпутами"
            isDisabled={demoInput.type === "radio" ? false : true}
            withAsterics={true}
          />
        )}
        {demoInput.type !== "radio" && (
          <>
            <Select
              name="name"
              title="Выберите атрибут name для инпута"
              options={optionForSelectNameInput}
              withAsterics={true}
              description="Не должно дублироваться с другими инпутами"
            />

            <Input
              type="text"
              name="placeholder"
              placeholder={demoInput.placeholder}
              label="Placeholder"
              isDisabled={demoInput.type === "radio" ? true : false}
            />
          </>
        )}
        <Input
          type="text"
          name="label"
          placeholder={demoInput.label}
          label="Label"
        />
        <Input
          type="text"
          name="description"
          placeholder={demoInput.description}
          label="Description"
        />
        {demoInput.type !== "radio" && (
          <>
            {" "}
            <Input
              type="text"
              name="error"
              placeholder={demoInput.error}
              label="Error"
            />
            <Select
              name="colorScheme"
              title="Выберите цветовую схему"
              options={optionForSelectColorScheme}
            />
          </>
        )}

        <RangeInput name="inputSize" label="Size" value={demoInput.inputSize} />
        {demoInput.type !== "radio" && (
          <>
            {" "}
            <RangeInput
              name="borderRadius"
              label="Radius"
              value={demoInput.borderRadius}
            />
            <SwitchToggle
              label="Disabled"
              name="isDisabled"
              checked={demoInput.isDisabled}
            />
          </>
        )}
        <SwitchToggle
          label="With asterics"
          name="withAsterics"
          checked={demoInput.withAsterics}
        />
      </Form>
    </div>
  );
};
