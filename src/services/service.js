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

export const getSubscribedChannels = async (token) => {
  const response = await axios.get(
    `https://youtube.googleapis.com/youtube/v3/subscriptions?part=snippet%2CcontentDetails&maxResults=50&mine=true&key=AIzaSyDOUp35AeuxBSdyGMdwCRdQY8P8hLWpa6w`,
    {
      headers: {
        Authorization: `Bearer ${token}`,
        Accept: "application/json",
      },
    }
  );
  console.log(response);
};

export const OAuthRequest = async () => {
  const response = await axios.get(
    `https://accounts.google.com/o/oauth2/v2/auth?scope=https://www.googleapis.com/auth/youtube.readonly&include_granted_scopes=true&client_id=864445880843-lafkj1dgakaf8hh8h235i3ngh9q9cou7.apps.googleusercontent.com&redirect_uri=http://localhost:3000&response_type=token&type=pineapple`,
    { headers: { "Access-Control-Allow-Origin": "*" } }
  );
  console.log(response);
};
