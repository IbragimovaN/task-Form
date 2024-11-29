import { useState } from "react";
import { Signin } from "./components/Signin/Signin";
import { Signup } from "./components/Signup/Signup";
import { Button } from "./components/Button/Button";
import styles from "./App.module.css";

function App() {
  const [isOpenRegForm, setIsOpenRegForm] = useState(false);
  const [inputsArrSignin, setInputsArrSignin] = useState([]);
  const [inputsArrSignup, setInputsArrSignup] = useState([]);
  const handleSubmit = (e, data) => {
    e.preventDefault();

    console.log(data);
  };
  return (
    <div className={styles.app}>
      <div className={styles.wrapperBtn}>
        <Button
          onClick={() => setIsOpenRegForm(false)}
          classname={`${styles.appBtn} ${
            !isOpenRegForm ? styles.active : undefined
          }`}
        >
          {" "}
          Войти
        </Button>{" "}
        /
        <Button
          onClick={() => setIsOpenRegForm(true)}
          classname={`${styles.appBtn} ${
            isOpenRegForm ? styles.active : undefined
          }`}
        >
          Зарегистрироваться
        </Button>
      </div>
      {isOpenRegForm ? (
        <Signup
          handleSubmit={handleSubmit}
          inputsArr={inputsArrSignup}
          setInputsArr={setInputsArrSignup}
        />
      ) : (
        <Signin
          handleSubmit={handleSubmit}
          inputsArr={inputsArrSignin}
          setInputsArr={setInputsArrSignin}
        />
      )}
    </div>
  );
}

export default App;
