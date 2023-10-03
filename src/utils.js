import {
  getAllChannelVideos,
  getSubscribedChannelIds,
  getUserProfile,
  verifyAccessToken,
} from "./services/service";
import { setHomepageInfo } from "./reducers/channelReducer";
import { setUser, setToken } from "./reducers/userReducer";

export const fetchChannels = async (token, dispatch) => {
  // TODO: fetch all subscriptions
  const channelIds = await getSubscribedChannelIds(token, dispatch);
  const channelsHomepage = channelIds.slice(0, 10);
  const fetchedVideos = await getAllChannelVideos(channelsHomepage, token);
  dispatch(setHomepageInfo(fetchedVideos));
};

export const getUserProfileInfo = async (token, dispatch) => {
  const data = await getUserProfile(token);
  dispatch(setUser(data));
};

export const verifyToken = async (token, dispatch) => {
  const data = await verifyAccessToken(token);
  if (data.error) {
    console.log("expired or invalid token");
    dispatch(setToken(null));
  }
  return data;
};

// credit: https://stackoverflow.com/questions/2450954/how-to-randomize-shuffle-a-javascript-array
export const shuffle = (array) => {
  let currentIndex = array.length,
    randomIndex;

  // While there remain elements to shuffle.
  while (currentIndex !== 0) {
    // Pick a remaining element.
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    // And swap it with the current element.
    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex],
      array[currentIndex],
    ];
  }

  return array;
};
