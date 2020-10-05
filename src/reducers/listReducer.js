const initialState = "EMS";

const listReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SET_CATEGORY":
      return action.category;
    default:
      return state;
  }
};

export const setCategory = (category) => {
  return {
    type: "SET_CATEGORY",
    category,
  };
};

export default listReducer;
