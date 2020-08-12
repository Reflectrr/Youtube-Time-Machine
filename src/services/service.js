import axios from "axios";

export const fetchVideos = () => {
  const request = axios.get("/videos");
  return request.then((res) => res.data);
};
