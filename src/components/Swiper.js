import React from "react";
import { useSelector } from "react-redux";
import SwiperCore, { Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import VideoCard from "./VideoCard";
import "swiper/swiper-bundle.css";

SwiperCore.use([Navigation]);

const SwiperComponent = () => {
  const videos = useSelector((state) => state.videos.allVideos.splice(0, 10));
  return (
    <Swiper
      spaceBetween={30}
      slidesPerView={4}
      slidesPerGroup={4}
      loop={true}
      // TODO: set up these two modules correctly
      navigation
      // onSwiper={(swiper) => console.log(swiper)}
    >
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
