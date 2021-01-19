const initialState = {
  allVideos: [],
  earlyMorningShows: [],
  chapelVideos: [],
  otherVideos: [],
  messageVideos: [],
};

const typeMap = new Map();
typeMap.set("chapel", "SET_CHAPELVIDEOS");
typeMap.set("ems", "SET_EMS");
typeMap.set("all", "SET_ALLVIDEOS");
typeMap.set("message", "SET_MESSAGEVIDEOS");
typeMap.set("other", "SET_OTHERVIDEOS");

const videoReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SET_ALLVIDEOS":
      return { ...state, allVideos: action.videos };
    case "SET_EMS":
      return { ...state, earlyMorningShows: action.videos };
    case "SET_CHAPELVIDEOS":
      return { ...state, chapelVideos: action.videos };
    case "SET_MESSAGEVIDEOS":
      return { ...state, messageVideos: action.videos };
    case "SET_OTHERVIDEOS":
      return { ...state, otherVideos: action.videos };
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
