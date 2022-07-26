const initialState = {};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SET_USER":
      return action.user;
    default:
      return state;
  }
};

export const setUser = (user) => {
  return {
    user,
    type: "SET_USER",
  };
};

export default userReducer;
