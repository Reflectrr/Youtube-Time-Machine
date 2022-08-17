import {
  getAllChannelVideos,
  getSubscribedChannelIds,
  getUserProfile,
  verifyAccessToken,
} from "../../services/service";
import { setVideoInfo } from "../../reducers/channelReducer";
import { setUser, setToken } from "../../reducers/userReducer";

export const fetchChannels = async (token, dispatch) => {
  const channelIds = await getSubscribedChannelIds(token);
  // TODO: fetch all subscriptions
  //console.log(channelIds);
  const fetchedVideos = await getAllChannelVideos(channelIds, token);
  //console.log(fetchedVideos);
  dispatch(setVideoInfo(fetchedVideos));
};

export const getUserProfileInfo = async (token, dispatch) => {
  const data = await getUserProfile(token);
  dispatch(setUser(data));
};

export const verifyToken = async (token, dispatch) => {
  const data = await verifyAccessToken(token);
  console.log("verifyToken: ", data);
  if (data.expires_in <= 0) {
    console.log("expired");
    dispatch(setToken(null));
  }
  return data;
};
