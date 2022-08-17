import axios from "axios";
import {
  setAllChannelIds,
  setAllChannelTitles,
} from "../reducers/channelReducer";

export const getSubscribedChannelIds = async (token, dispatch) => {
  const response = await axios.get(
    `https://youtube.googleapis.com/youtube/v3/subscriptions?part=snippet%2CcontentDetails&maxResults=50&mine=true&key=AIzaSyDOUp35AeuxBSdyGMdwCRdQY8P8hLWpa6w`,
    {
      headers: {
        Authorization: `Bearer ${token}`,
        Accept: "application/json",
      },
    }
  );
  const allChannelTitles = response.data.items.map(
    (item) => item.snippet.title
  );
  const allChannelIds = response.data.items.map(
    (item) => item.snippet.resourceId.channelId
  );
  let nextPageToken = response.data.nextPageToken;
  while (nextPageToken) {
    const moreResponse = await axios.get(
      `https://youtube.googleapis.com/youtube/v3/subscriptions?part=snippet%2CcontentDetails&maxResults=50&mine=true&key=AIzaSyDOUp35AeuxBSdyGMdwCRdQY8P8hLWpa6w&pageToken=${nextPageToken}`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
          Accept: "application/json",
        },
      }
    );
    nextPageToken = moreResponse.data.nextPageToken;

    const moreChannelTitles = moreResponse.data.items.map(
      (item) => item.snippet.title
    );
    const moreChannelIds = moreResponse.data.items.map(
      (item) => item.snippet.resourceId.channelId
    );
    allChannelTitles.push(...moreChannelTitles);
    allChannelIds.push(...moreChannelIds);
    console.log(moreResponse.data);
  }
  console.log(allChannelIds);
  console.log(allChannelTitles);
  dispatch(setAllChannelIds(allChannelIds));
  dispatch(setAllChannelTitles(allChannelTitles));
  return allChannelIds;
};

export const getAllChannelVideos = async (channelIds, token) => {
  // channelIds is an array of channelId
  const channelList = channelIds.map((id) => `&id=${id}`).join("");
  //console.log(channelList);
  const channelResponse = await axios.get(
    `https://youtube.googleapis.com/youtube/v3/channels?part=contentDetails${channelList}&maxResults=20&key=AIzaSyDOUp35AeuxBSdyGMdwCRdQY8P8hLWpa6w`,
    {
      headers: {
        Authorization: `Bearer ${token}`,
        Accept: "application/json",
      },
    }
  );
  //console.log("channelResponse: ", channelResponse);
  const uploadPlaylistIds = channelResponse.data.items.map(
    (item) => item.contentDetails.relatedPlaylists.uploads
  );
  //console.log(uploadPlaylistIds);
  const allChannels = [];
  for (const playlistId of uploadPlaylistIds) {
    const videosResponse = await axios.get(
      `https://youtube.googleapis.com/youtube/v3/playlistItems?part=snippet&maxResults=20&playlistId=${playlistId}&key=AIzaSyDOUp35AeuxBSdyGMdwCRdQY8P8hLWpa6w`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
          Accept: "application/json",
        },
      }
    );
    //console.log("videosResponse: ", videosResponse);
    const filteredVideos = videosResponse.data.items.map((v) => {
      const snippet = v.snippet;
      return {
        thumbnail: `https://i.ytimg.com/vi/${snippet.resourceId.videoId}/mqdefault.jpg`,
        videoId: snippet.resourceId.videoId,
        title: snippet.title,
      };
    });
    const channelId = videosResponse.data.items[0].snippet.channelId;
    const channelTitle = videosResponse.data.items[0].snippet.channelTitle;
    allChannels.push({
      title: channelTitle,
      channelId: channelId,
      videos: filteredVideos,
    });
  }
  return allChannels;
};

export const getUserProfile = async (token) => {
  const response = await axios.get(
    `https://www.googleapis.com/oauth2/v1/userinfo`,
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );
  return response.data;
};

export const verifyAccessToken = async (token) => {
  const response = await axios.get(
    `https://www.googleapis.com/oauth2/v1/tokeninfo`,
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );
  return response.data;
};

export const revokeToken = async (token) => {
  const response = await axios.post(
    `https://oauth2.googleapis.com/revoke?token=${token}`
  );
  console.log(response);
  return response.data;
};

export const getChannelVideos = async (channelId, token) => {
  const channelResponse = await axios.get(
    `https://youtube.googleapis.com/youtube/v3/channels?part=contentDetails&id=${channelId}&key=AIzaSyDOUp35AeuxBSdyGMdwCRdQY8P8hLWpa6w`,
    {
      headers: {
        Authorization: `Bearer ${token}`,
        Accept: "application/json",
      },
    }
  );
  console.log("channelResponse: ", channelResponse);
  const uploadPlaylistId =
    channelResponse.data.items[0].contentDetails.relatedPlaylists.uploads;
  console.log(uploadPlaylistId);
  const videosResponse = await axios.get(
    `https://youtube.googleapis.com/youtube/v3/playlistItems?part=snippet&maxResults=48&playlistId=${uploadPlaylistId}&key=AIzaSyDOUp35AeuxBSdyGMdwCRdQY8P8hLWpa6w`,
    {
      headers: {
        Authorization: `Bearer ${token}`,
        Accept: "application/json",
      },
    }
  );
  console.log("videosResponse: ", videosResponse);
  const filteredVideos = videosResponse.data.items.map((v) => {
    const snippet = v.snippet;
    return {
      thumbnail: `https://i.ytimg.com/vi/${snippet.resourceId.videoId}/mqdefault.jpg`,
      videoId: snippet.resourceId.videoId,
      title: snippet.title,
    };
  });
  return filteredVideos;
};
