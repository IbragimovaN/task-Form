export const optionForSelectType = [
  { id: 1, value: "text" },
  { id: 2, value: "email" },
  { id: 3, value: "password" },
  { id: 4, value: "radio" },
  { id: 5, value: "phone" },
];

export const optionForSelectNameInput = [
  { id: 1, value: "userName" },
  { id: 2, value: "nickName" },
  { id: 3, value: "email" },
  { id: 4, value: "password" },
  { id: 5, value: "passcheck" },
  { id: 6, value: "sex" },
  { id: 7, value: "phone" },
];

export const initialStateDemoInput = {
  placeholder: "Установите placeholder ",
  label: "Укажите название поля",
  description: "Укажите описание поля (если это необходимо)",
  error: "Текст ошибки при не валидном вводе",
  name: "",
  variant: "",
  radius: "",
  size: "",
  disabled: false,
  withAsterics: "",
  colorScheme: "default",
  borderRadius: "0",
  inputSize: "0",
};

export const optionForSelectColorScheme = [
  { id: 1, value: "default" },
  { id: 2, value: "filled" },
  { id: 3, value: "unstyled" },
];

export const dataArrForRangeInput = [
  { number: 0, text: "xs" },
  { number: 1, text: "sm" },
  { number: 2, text: "md" },
  { number: 3, text: "lg" },
  { number: 4, text: "xl" },
];
