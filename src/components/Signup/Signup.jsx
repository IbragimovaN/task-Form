import { useState } from "react";
import { CreateInputField } from "../CreateInputField/CreateInputField";

export const Signup = ({ handleSubmit, inputsArr, setInputsArr }) => {
  const [data, setData] = useState({});

  return (
    <CreateInputField
      handleSubmit={handleSubmit}
      data={data}
      setData={setData}
      inputsArr={inputsArr}
      setInputsArr={setInputsArr}
      btnValue="Зарегестрироваться"
      titleForm="Регистрация"
      formId="signup"
    />
  );
};
