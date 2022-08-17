import {
  getAllChannelVideos,
  getSubscribedChannelIds,
  getUserProfile,
} from "../../services/service";
import { setVideoInfo } from "../../reducers/channelReducer";
import { setUser } from "../../reducers/userReducer";

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
  console.log(data);
  dispatch(setUser(data));
};

export const handleCallbackResponse = async () => {
  window.location.href = `https://accounts.google.com/o/oauth2/v2/auth?scope=https://www.googleapis.com/auth/youtube.readonly&include_granted_scopes=true&client_id=864445880843-lafkj1dgakaf8hh8h235i3ngh9q9cou7.apps.googleusercontent.com&redirect_uri=http://localhost:3000&response_type=token&state=pineapple`;
};
