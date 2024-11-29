import { useEffect, useState } from "react";
import { CreateInputField } from "../CreateInputField/CreateInputField";

export const Signin = ({ handleSubmit, inputsArr, setInputsArr }) => {
  const [data, setData] = useState({});

  useEffect(() => {
    console.log("IN");
    return () => {
      console.log("IN отписка");
    };
  }, []);

  return (
    <CreateInputField
      handleSubmit={handleSubmit}
      data={data}
      setData={setData}
      inputsArr={inputsArr}
      setInputsArr={setInputsArr}
      btnValue="Войти"
      titleForm="Авторизация"
      formId="signin"
    />
  );
};
