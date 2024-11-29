import { useState } from "react";
import { initialStateDemoInput } from "../../constants";
import styles from "./CreateInputField.module.css";
import Form from "../Form/Form";
import { Input } from "../Input/Input";
import { ControlPanel } from "../ControlPanel/ControlPanel";

export const CreateInputField = ({
  handleSubmit,
  inputsArr,
  setInputsArr,
  data,
  setData,
  btnValue,
  titleForm,
  formId,
}) => {
  const [demoInput, setDemoInput] = useState(initialStateDemoInput);

  return (
    <div className={styles.page}>
      {" "}
      <Form
        btnValue={btnValue}
        handleSubmit={handleSubmit}
        data={data}
        setData={setData}
        id={formId}
      >
        <h2 className={styles.title}>Демонcтрационный инпут</h2>
        <Input
          placeholder={demoInput.placeholder}
          label={demoInput.label}
          error={demoInput.error}
          description={demoInput.description}
          colorScheme={demoInput.colorScheme}
          isDemoInput={true}
          borderRadius={demoInput.borderRadius}
          inputSize={demoInput.inputSize}
          isDisabled={demoInput.isDisabled}
          withAsterics={demoInput.withAsterics}
          type={demoInput.type}
          name={demoInput.name}
          id={demoInput.id}
          idForRadio={demoInput.idForRadio}
        />

        <h2 className={styles.title}>{titleForm}</h2>
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
            id={item.id}
            idForRadio={item.idForRadio}
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
