import axios from "axios";
import jsonpAdapter from "axios-jsonp";
import store from "../store";
import sha256 from "crypto-js/sha256";
import BaseHex from "crypto-js/enc-hex";

const baseUrl = "https://vcfilms.herokuapp.com";

export const fetchVideos = async () => {
  const videos = await axios.get(`${baseUrl}/api/videos/all`);
  return videos.data;
};

export const updateVideo = async (newInfo, videoId) => {
  const password = store.getState().admin.password;
  const hash = createHash256(password);
  const response = await axios.put(
    `${baseUrl}/api/videos/${videoId}?token=${hash}`,
    newInfo
  );
  return response;
};

export const refreshVideos = async () => {
  const response = await axios.post(`${baseUrl}/api/videos/updateAll`);
  return response;
};
const createHash256 = (text) => {
  const hashArray = sha256(text);
  const hashHex = BaseHex.stringify(hashArray);
  return hashHex;
};

export const getAutoComplete = async (queryTerm) => {
  const response = await axios({
    url: `https://suggestqueries.google.com/complete/search?hl=en&ds=yt&q=${queryTerm}&client=youtube`,
    adapter: jsonpAdapter,
  }).then((res) => {
    const responseData = res.data[1];
    const suggestions = responseData.map((data) => data[0]);
    console.log(suggestions);
    return suggestions;
  });

  return response;
};

export const fetchChannelInformation = async (channelName) => {
  //gapi.client.setApiKey("AIzaSyDOUp35AeuxBSdyGMdwCRdQY8P8hLWpa6w");
  const response = await axios.get(
    `https://youtube.googleapis.com/youtube/v3/channels?part=snippet%2CcontentDetails%2Cstatistics&forUsername=${channelName}&key=AIzaSyDOUp35AeuxBSdyGMdwCRdQY8P8hLWpa6w`
  );
  console.log(response);

  return response;
};
