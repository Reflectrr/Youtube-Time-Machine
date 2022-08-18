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
    case "SET_CHANNEL_VIDEOS":
      if (
        state.selectedChannel &&
        state.selectedChannel.channelId === action.channelId
      ) {
        const selectedChannel = state.selectedChannel;
        selectedChannel.videos = action.videos;
        return { ...state, selectedChannel: selectedChannel };
      } else {
        // go through homepage to find the channel
        const homepageChannels = state.homepage;
        const index = homepageChannels.indexOf(
          homepageChannels.filter(
            (channel) => channel.channelId === action.channelId
          )[0]
        );
        homepageChannels[index].videos = action.videos;
        return { ...state, homepage: homepageChannels };
      }
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

export const setChannelVideos = (channelId, videos) => {
  return {
    type: "SET_CHANNEL_VIDEOS",
    channelId,
    videos,
  };
};
export default channelReducer;
