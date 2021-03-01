import React from "react";
import { useSelector } from "react-redux";
import SwiperCore, { Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import VideoCard from "./VideoCard";

SwiperCore.use([Navigation]);

const SwiperComponent = ({ videos }) => {
  const classes = useSelector((state) => state.classes);
  // TODO: add breakpoints
  const settings = {
    spaceBetween: 20,
    slidesPerView: 2,
    slidesPerGroup: 2,
    navigation: true,
    className: classes.marginBottom,
    breakpoints: {
      // when window width is >= 480px
      960: {
        slidesPerView: 3,
        spaceBetween: 30,
        slidesPerGroup: 3,
      },
      // when window width is >= 640px
      1280: {
        slidesPerView: 4,
        spaceBetween: 40,
        slidesPerGroup: 4,
      },
    },
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
