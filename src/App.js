import { useState } from "react";
import { Signin } from "./components/Signin/Signin";
import { Signup } from "./components/Signup/Signup";
import { Button } from "./components/Button/Button";
import styles from "./App.module.css";

function App() {
  const [isOpenRegForm, setIsOpenRegForm] = useState(false);

  return (
    <div className={styles.app}>
      <div>
        <Button
          onClick={() => setIsOpenRegForm(false)}
          classname={styles.appBtn}
        >
          {" "}
          Войти
        </Button>{" "}
        /
        <Button
          onClick={() => setIsOpenRegForm(true)}
          classname={styles.appBtn}
        >
          Зарегистрироваться
        </Button>
      </div>

      {isOpenRegForm ? <Signup /> : <Signin />}
    </div>
  );
}

export default App;
