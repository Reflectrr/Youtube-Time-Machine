const videoReducer = (state = [], action) => {
  switch (action.type) {
    case "SET_VIDEOS":
      return action.videos;
    default:
      return state;
  }
};

export const setVideos = (videos) => {
  return {
    type: "SET_VIDEOS",
    videos,
  };
};

export default videoReducer;
