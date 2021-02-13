import React from "react";
import { useSelector } from "react-redux";
import SwiperCore, { Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import VideoCard from "./VideoCard";

SwiperCore.use([Navigation]);

const SwiperComponent = () => {
  const allVideos = useSelector((state) => state.videos.allVideos);
  const videos = allVideos
    .sort((v1, v2) => {
      return v1.date < v2.date ? 1 : -1;
    })
    .splice(0, 8);
  console.log(videos);
  const settings = {
    spaceBetween: 30,
    slidesPerView: 4,
    slidesPerGroup: 4,
    navigation: true,
  };
  return (
    <Swiper {...settings}>
      {videos &&
        videos.map((v, n) => {
          return (
            <SwiperSlide key={`videoCard-${v.videoId}-${n}`}>
              <VideoCard video={v}></VideoCard>
            </SwiperSlide>
          );
        })}
    </Swiper>
  );
};

export default SwiperComponent;
