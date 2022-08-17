const initialState = { homepage: [], allChannelTitles: [], allChannelIds: [] };

const channelReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SET_HOMEPAGE_INFO":
      return { ...state, homepage: action.info };
    case "SET_ALL_CHANNEL_TITLES":
      return { ...state, allChannelTitles: action.allChannelTitles };
    case "SET_ALL_CHANNEL_IDS":
      return { ...state, allChannelIds: action.allChannelIds };
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

export default channelReducer;
