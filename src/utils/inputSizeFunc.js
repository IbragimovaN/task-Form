export const inputSizeFunc = (sizeValue) => {
  switch (sizeValue) {
    case "0": {
      return {
        forInput: {
          width: "100%",
          height: "38px",
          fontSize: "13px",
        },
        forLabel: {
          fontSize: "15px",
        },
        forDescr: {
          fontSize: "11px",
        },
        forError: {
          fontSize: "13px",
        },
      };
    }
    case "1": {
      return {
        forInput: {
          width: "105%",
          height: "40px",
          fontSize: "14px",
        },
        forLabel: {
          fontSize: "16px",
        },
        forDescr: {
          fontSize: "12px",
        },
        forError: {
          fontSize: "14px",
        },
      };
    }
    case "2": {
      return {
        forInput: {
          width: "110%",
          height: "42px",
          fontSize: "15px",
        },
        forLabel: {
          fontSize: "17px",
        },
        forDescr: {
          fontSize: "13px",
        },
        forError: {
          fontSize: "15px",
        },
      };
    }
    case "3": {
      return {
        forInput: {
          width: "115%",
          height: "44px",
          fontSize: "16px",
        },
        forLabel: {
          fontSize: "18px",
        },
        forDescr: {
          fontSize: "14px",
        },
        forError: {
          fontSize: "16px",
        },
      };
    }
    case "4": {
      return {
        forInput: {
          width: "120%",
          height: "46px",
          fontSize: "17px",
        },
        forLabel: {
          fontSize: "19px",
        },
        forDescr: {
          fontSize: "15px",
        },
        forError: {
          fontSize: "17px",
        },
      };
    }
    default: {
      break;
    }
  }
};
