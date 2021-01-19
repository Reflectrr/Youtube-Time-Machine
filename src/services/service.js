import axios from "axios";

const baseUrl =
  process.env.NODE_ENV === "dev"
    ? "https://vcfilms-backend.herokuapp.com"
    : "http://localhost:3001";

export const fetchVideos = async () => {
  const videos = await axios.get(`${baseUrl}/api/videos/all`);
  return videos.data;
};

export const updateVideo = async (newInfo, video) => {
  const newVideo = {
    ...video,
    title: newInfo.title,
    description: newInfo.description,
    type: newInfo.type,
  };
  const response = await axios.post(
    `${baseUrl}/api/videos/${video.videoId}`,
    newVideo
  );
  return response;
};
