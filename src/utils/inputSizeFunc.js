export const inputSizeFunc = (sizeValue) => {
  switch (sizeValue) {
    case "0": {
      return {
        width: "100%",
        height: "40px",
      };
    }
    case "1": {
      return {
        width: "105%",
        height: "42px",
      };
    }
    case "2": {
      return {
        width: "110%",
        height: "44px",
      };
    }
    case "3": {
      return {
        width: "115%",
        height: "46px",
      };
    }
    case "4": {
      return {
        width: "120%",
        height: "48px",
      };
    }
    default: {
      break;
    }
  }
};
