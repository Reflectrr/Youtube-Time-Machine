const initialState = {};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SET_TOKEN":
      return { ...state, token: action.token };
    case "SET_USER":
      return { ...state, user: action.user };
    default:
      return state;
  }
};

export const setToken = (token) => {
  return {
    token,
    type: "SET_TOKEN",
  };
};

export const setUser = (user) => {
  return {
    user,
    type: "SET_USER",
  };
};
export default userReducer;
