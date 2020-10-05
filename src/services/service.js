import axios from "axios";

const baseUrl =
  process.env.NODE_ENV === "dev"
    ? "https://vcfilms-backend.herokuapp.com"
    : "http://localhost:3001";

export const fetchVideos = () => {
  const request = axios.get(`${baseUrl}/videos`);
  return request.then((res) => res.data);
};
