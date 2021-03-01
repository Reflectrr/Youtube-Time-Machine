import axios from "axios";
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
