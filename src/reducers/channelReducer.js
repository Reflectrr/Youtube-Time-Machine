const initialState = [];

const channelReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SET_INFO":
      return action.info;
    default:
      return state;
  }
};

export const setVideoInfo = (info) => {
  return {
    type: "SET_INFO",
    info,
  };
};

export default channelReducer;
