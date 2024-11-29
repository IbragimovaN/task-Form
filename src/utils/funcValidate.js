export const funcValidate = (e, setShowError) => {
  switch (e.target.type) {
    case "email": {
      const isValid = /^[^а-я]+@[^а-я]+\.[^а-я\._'+;*^&=?~{}\-\.\/,\\]+$/.test(
        e.target.value
      );

      !isValid ? setShowError(true) : setShowError(false);
      break;
    }
    case "text": {
      if (e.target.name === "userName") {
        const isValid = /^[A-Za-zА-Яа-яЁё\s-]+$/.test(e.target.value);

        !isValid ? setShowError(true) : setShowError(false);
      } else if (e.target.name === "nickName") {
        const isValid = /^[a-zA-Z0-9._@^\$-]+$/.test(e.target.value);

        !isValid ? setShowError(true) : setShowError(false);
      }
      break;
    }
    case "password": {
      if (e.target.name === "password") {
        const isValid =
          /^(?=[A-Za-z0-9]*[A-Za-z])(?=[A-Za-z0-9]*\d)[A-Za-z0-9]{6,}$/.test(
            e.target.value
          );

        !isValid ? setShowError(true) : setShowError(false);
      } else if (e.target.name === "passcheck") {
        const passwordInput = document.querySelector('input[name="password"]');
        passwordInput.value !== e.target.value
          ? setShowError(true)
          : setShowError(false);
      }
      break;
    }
    case "phone": {
      const isValid =
        /^(?:\+?\d{1,2}\s?)?(?:\(\d{3}\)|\d{3})[-.\s]?\d{3}[-.\s]?\d{4}$/.test(
          e.target.value
        );

      !isValid ? setShowError(true) : setShowError(false);
      break;
    }
    default: {
      break;
    }
  }
};
