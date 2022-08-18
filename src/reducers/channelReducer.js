const initialState = {
  homepage: [],
  allChannelTitles: [],
  allChannelIds: [],
  selectedChannel: null,
  selectedVideo: null,
};

const channelReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SET_HOMEPAGE_INFO":
      return { ...state, homepage: action.info };
    case "SET_ALL_CHANNEL_TITLES":
      return { ...state, allChannelTitles: action.allChannelTitles };
    case "SET_ALL_CHANNEL_IDS":
      return { ...state, allChannelIds: action.allChannelIds };
    case "SET_SELECTED_CHANNEL":
      return { ...state, selectedChannel: action.channel };
    case "SET_SELECTED_VIDEO":
      return { ...state, selectedVideo: action.video };
    default:
      return state;
  }
};

export const setHomepageInfo = (info) => {
  return {
    type: "SET_HOMEPAGE_INFO",
    info,
  };
};

export const setAllChannelTitles = (allChannelTitles) => {
  return {
    type: "SET_ALL_CHANNEL_TITLES",
    allChannelTitles,
  };
};

export const setAllChannelIds = (allChannelIds) => {
  return {
    type: "SET_ALL_CHANNEL_IDS",
    allChannelIds,
  };
};

export const setSelectedChannel = (channel) => {
  return {
    type: "SET_SELECTED_CHANNEL",
    channel,
  };
};

export const setSelectedVideo = (video) => {
  return {
    type: "SET_SELECTED_VIDEO",
    video,
  };
};
export default channelReducer;
