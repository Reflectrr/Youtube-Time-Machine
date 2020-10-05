const initialState = {
  allVideos: [],
  earlyMorningShows: [],
  chapelVideos: [],
};

const typeMap = new Map();
typeMap.set("Chapel", "SET_CHAPELVIDEOS");
typeMap.set("EMS", "SET_EMS");
typeMap.set("All", "SET_ALLVIDEOS");

const videoReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SET_ALLVIDEOS":
      return { ...state, allVideos: action.videos };
    case "SET_EMS":
      return { ...state, earlyMorningShows: action.videos };
    case "SET_CHAPELVIDEOS":
      return { ...state, chapelVideos: action.videos };
    default:
      return state;
  }
};

export const setVideos = (videos, type) => {
  const videoType = typeMap.get(type);
  return {
    type: videoType,
    videos,
  };
};

export default videoReducer;
