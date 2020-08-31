import axios from "axios";

const baseUrl = "https://vcfilms-backend.herokuapp.com";

export const fetchVideos = () => {
  const request = axios.get(`${baseUrl}/videos`);
  return request.then((res) => res.data);
};
