import { useRef, useState } from "react";
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
    console.log(demoInput);
  };

  const createInputClick = (e) => {
    e.preventDefault();
    setInputsArr([
      ...inputsArr,
      { ...demoInput, id: Math.random().toString().slice(3) },
    ]);
    handleReset();
    formRef.current.reset();
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
      >
        <Select
          title="Выберите тип инпута"
          name="type"
          options={optionForSelectType}
        />
        <Select
          name="name"
          title="Выберите атрибут name для инпута"
          options={optionForSelectNameInput}
        />
        <Input
          type="text"
          name="placeholder"
          placeholder={demoInput.placeholder}
          label="Placeholder"
        />
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

        <RangeInput
          name="borderRadius"
          label="Radius"
          value={demoInput.borderRadius}
        />
        <RangeInput name="inputSize" label="Size" value={demoInput.inputSize} />
        <SwitchToggle
          label="Disabled"
          name="isDisabled"
          checked={demoInput.isDisabled}
        />
        <SwitchToggle
          label="With asterics"
          name="withAsterics"
          checked={demoInput.withAsterics}
        />
      </Form>
    </div>
  );
};
