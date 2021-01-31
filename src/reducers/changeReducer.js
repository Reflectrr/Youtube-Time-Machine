const initialState = {
  videoId: null,
  videoContent: {
    description: null,
    type: null,
    title: null,
  },
};

const changeReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SET_CHANGEVIDEO":
      if (action.video) {
        return {
          videoId: action.video.videoId,
          videoContent: {
            description: action.video.description,
            type: action.video.type,
            title: action.video.title,
          },
        };
      }
      return state;
    case "SET_TITLE":
      return {
        ...state,
        videoContent: {
          ...state.videocontent,
          title: action.title,
        },
      };
    case "SET_DESCRIPTION":
      return {
        ...state,
        videoContent: {
          ...state.videocontent,
          description: action.description,
        },
      };
    case "SET_TYPE":
      return {
        ...state,
        videoContent: { ...state.videocontent, type: action.videoType },
      };
    case "RESET_CHANGEVIDEO":
      return initialState;
    default:
      return state;
  }
};

export const setChangeVideo = (video) => {
  return {
    type: "SET_CHANGEVIDEO",
    video,
  };
};

export const setTitle = (title) => {
  return {
    type: "SET_TITLE",
    title,
  };
};

export const setDescription = (description) => {
  return {
    type: "SET_DESCRIPTION",
    description,
  };
};
export const setType = (videoType) => {
  return {
    type: "SET_TYPE",
    videoType,
  };
};

export const resetChangeVideo = () => {
  console.log("reseted");
  return {
    type: "RESET_CHANGEVIDEO",
  };
};

export default changeReducer;
