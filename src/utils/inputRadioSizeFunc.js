export const inputRadioSizeFunc = (sizeValue) => {
  switch (sizeValue) {
    case "0": {
      return {
        forInput: {
          width: "10px",
          height: "10px",
        },
        forLabel: {
          fontSize: "15px",
        },
        forDescr: {
          fontSize: "11px",
        },
      };
    }
    case "1": {
      return {
        forInput: {
          width: "12px",
          height: "12px",
        },
        forLabel: {
          fontSize: "16px",
        },
        forDescr: {
          fontSize: "12px",
        },
      };
    }
    case "2": {
      return {
        forInput: {
          width: "13px",
          height: "13px",
        },
        forLabel: {
          fontSize: "17px",
        },
        forDescr: {
          fontSize: "13px",
        },
      };
    }
    case "3": {
      return {
        forInput: {
          width: "14px",
          height: "14px",
        },
        forLabel: {
          fontSize: "18px",
        },
        forDescr: {
          fontSize: "14px",
        },
      };
    }
    case "4": {
      return {
        forInput: {
          width: "15px",
          height: "15px",
        },
        forLabel: {
          fontSize: "19px",
        },
        forDescr: {
          fontSize: "15px",
        },
      };
    }
    default: {
      break;
    }
  }
};
