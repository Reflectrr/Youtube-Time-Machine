const initialState = {
  password: "",
};
const adminReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SET_PASSWORD":
      return { ...state, password: action.data };
    default:
      return state;
  }
};

export const setPassword = (password) => {
  return { type: "SET_PASSWORD", data: password };
};

export default adminReducer;
