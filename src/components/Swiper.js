import React from "react";
import { useSelector } from "react-redux";
import SwiperCore, { Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import VideoCard from "./VideoCard";

SwiperCore.use([Navigation]);

const SwiperComponent = ({ videos }) => {
  const classes = useSelector((state) => state.classes);
  const settings = {
    spaceBetween: 30,
    slidesPerView: 4,
    slidesPerGroup: 4,
    navigation: true,
    className: classes.marginBottom,
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
