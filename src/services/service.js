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
  //TODO: change maxresults back to 50
  const response = await axios.get(
    `https://youtube.googleapis.com/youtube/v3/subscriptions?part=snippet%2CcontentDetails&maxResults=1&mine=true&key=AIzaSyDOUp35AeuxBSdyGMdwCRdQY8P8hLWpa6w`,
    {
      headers: {
        Authorization: `Bearer ${token}`,
        Accept: "application/json",
      },
    }
  );
  console.log(response);
  return response.data;
};

export const getChannelVideos = async (channelId, token) => {
  const channelResponse = await axios.get(
    `https://youtube.googleapis.com/youtube/v3/channels?part=contentDetails&id=${channelId}&maxResults=20&key=AIzaSyDOUp35AeuxBSdyGMdwCRdQY8P8hLWpa6w`,
    {
      headers: {
        Authorization: `Bearer ${token}`,
        Accept: "application/json",
      },
    }
  );
  const uploadPlaylistId =
    channelResponse.data.items[0].contentDetails.relatedPlaylists.uploads;
  const videosResponse = await axios.get(
    `https://youtube.googleapis.com/youtube/v3/playlistItems?part=snippet&maxResults=20&playlistId=${uploadPlaylistId}&key=AIzaSyDOUp35AeuxBSdyGMdwCRdQY8P8hLWpa6w`,
    {
      headers: {
        Authorization: `Bearer ${token}`,
        Accept: "application/json",
      },
    }
  );
  const filteredVideos = videosResponse.data.items.map((v) => {
    const snippet = v.snippet;
    return {
      thumbnail: snippet.thumbnails.default.url,
      videoId: snippet.resourceId.videoId,
      title: snippet.title,
    };
  });
  console.log(filteredVideos);
  return filteredVideos;
};
