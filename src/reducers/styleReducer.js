const styleReducer = (state = {}, action) => {
  switch (action.type) {
    case "SET_CLASSES":
      return action.classes;
    default:
      return state;
  }
};

export const setClasses = (classes) => {
  return {
    type: "SET_CLASSES",
    classes,
  };
};

export default styleReducer;
