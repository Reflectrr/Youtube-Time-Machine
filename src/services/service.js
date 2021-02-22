import axios from "axios";
import store from "../store";

const baseUrl =
  process.env.NODE_ENV === "production"
    ? "https://vcfilms-backend.herokuapp.com"
    : "http://localhost:3001";

export const fetchVideos = async () => {
  const videos = await axios.get(`${baseUrl}/api/videos/all`);
  return videos.data;
};

export const updateVideo = async (newInfo, videoId) => {
  const password = store.getState().admin.password;
  const hash = await createHash256(password);
  const response = await axios.put(
    `${baseUrl}/api/videos/${videoId}?token=${hash}`,
    newInfo
  );
  console.log(response);
  return response;
};
const createHash256 = async (text) => {
  // code copied from https://developer.mozilla.org/en-US/docs/Web/API/SubtleCrypto/digest
  const encoder = new TextEncoder();
  const data = encoder.encode(text);
  const hashBuffer = await crypto.subtle.digest("SHA-256", data);
  const hashArray = Array.from(new Uint8Array(hashBuffer)); // convert buffer to byte array
  const hashHex = hashArray
    .map((b) => b.toString(16).padStart(2, "0"))
    .join(""); // convert bytes to hex string
  return hashHex;
};
