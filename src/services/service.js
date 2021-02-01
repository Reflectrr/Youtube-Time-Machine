import axios from "axios";

const baseUrl =
  process.env.NODE_ENV === "production"
    ? "https://vcfilms-backend.herokuapp.com"
    : "http://localhost:3001";

export const fetchVideos = async () => {
  const videos = await axios.get(`${baseUrl}/api/videos/all`);
  return videos.data;
};

export const updateVideo = async (newInfo, videoId) => {
  const response = await axios.put(`${baseUrl}/api/videos/${videoId}`, newInfo);
  console.log(response);
  return response;
};
