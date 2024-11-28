export const borderRadiusFunc = (radius) => {
  switch (radius) {
    case "0": {
      return {
        borderRadius: "0",
      };
    }
    case "1": {
      return {
        borderRadius: "5px",
      };
    }
    case "2": {
      return {
        borderRadius: "10px",
      };
    }
    case "3": {
      return {
        borderRadius: "15px",
      };
    }
    case "4": {
      return {
        borderRadius: "20px",
      };
    }
    default: {
      break;
    }
  }
};
