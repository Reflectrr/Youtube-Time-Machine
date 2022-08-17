import {
  getAllChannelVideos,
  getSubscribedChannelIds,
  getUserProfile,
  verifyAccessToken,
} from "../../services/service";
import { setHomepageInfo } from "../../reducers/channelReducer";
import { setUser, setToken } from "../../reducers/userReducer";

export const fetchChannels = async (token, dispatch) => {
  // TODO: fetch all subscriptions
  const channelIds = await getSubscribedChannelIds(token, dispatch);
  //console.log(channelIds);
  const channelsHomepage = channelIds.slice(0, 5);
  const fetchedVideos = await getAllChannelVideos(channelsHomepage, token);
  //console.log(fetchedVideos);
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
