export const colorStyleFunc = (colorScheme) => {
  if (colorScheme === "filled") {
    return {
      backgroundColor: "#f1f3f5",
      color: "#b3b9c0",
      border: "none",
    };
  } else if (colorScheme === "unstyled") {
    return {
      backgroundColor: "#fff",
      color: "#b3b9c0",
      border: "none",
    };
  }
};
