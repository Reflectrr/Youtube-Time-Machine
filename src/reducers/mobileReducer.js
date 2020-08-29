const mobileReducer = (state = false, action) => {
  switch (action.type) {
    case "TOGGLE_DRAWER":
      return !state;
    default:
      return state;
  }
};

export const toggleDrawer = () => {
  return {
    type: "TOGGLE_DRAWER",
  };
};

export default mobileReducer;
