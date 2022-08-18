import React from "react";
import { useSelector } from "react-redux";
import SwiperCore, { Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import VideoCard from "./VideoCard";
import { Typography } from "@material-ui/core";

SwiperCore.use([Navigation]);

const SwiperComponent = ({ videos, channel }) => {
  const classes = useSelector((state) => state.classes);
  const settings = {
    spaceBetween: 20,
    slidesPerView: 2,
    slidesPerGroup: 2,
    navigation: true,
    className: classes.marginBottom,
    breakpoints: {
      640: {
        slidesPerView: 3,
        spaceBetween: 30,
        slidesPerGroup: 3,
      },
      960: {
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
              <VideoCard video={v} channel={channel}></VideoCard>
              <Typography variant="subtitle1">{v.title}</Typography>
            </SwiperSlide>
          );
        })}
    </Swiper>
  );
};

export default SwiperComponent;
