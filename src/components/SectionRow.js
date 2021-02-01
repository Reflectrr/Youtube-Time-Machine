import React from "react";
import { Grid, Typography } from "@material-ui/core";
import Slider from "./NetflixSlider";

const SubsectionRow = ({ text }) => {
  const movies = [
    {
      id: 1,
      image: "/images/slide1.jpg",
      imageBg: "/images/slide1b.webp",
      title: "1983",
    },
    {
      id: 2,
      image: "/images/slide2.jpg",
      imageBg: "/images/slide2b.webp",
      title: "Russian doll",
    },
    {
      id: 3,
      image: "/images/slide1.jpg",
      imageBg: "/images/slide1b.webp",
      title: "1983",
    },
    {
      id: 4,
      image: "/images/slide2.jpg",
      imageBg: "/images/slide2b.webp",
      title: "Russian doll",
    },
    {
      id: 5,
      image: "/images/slide3.jpg",
      imageBg: "/images/slide3b.webp",
      title: "The rain",
    },
    {
      id: 6,
      image: "/images/slide4.jpg",
      imageBg: "/images/slide4b.webp",
      title: "Sex education",
    },
    {
      id: 7,
      image: "/images/slide5.jpg",
      imageBg: "/images/slide5b.webp",
      title: "Elite",
    },
    {
      id: 8,
      image: "/images/slide6.jpg",
      imageBg: "/images/slide6b.webp",
      title: "Black mirror",
    },
    {
      id: 9,
      image: "/images/slide3.jpg",
      imageBg: "/images/slide3b.webp",
      title: "The rain",
    },
    {
      id: 10,
      image: "/images/slide4.jpg",
      imageBg: "/images/slide4b.webp",
      title: "Sex education",
    },
    {
      id: 11,
      image: "/images/slide5.jpg",
      imageBg: "/images/slide5b.webp",
      title: "Elite",
    },
    {
      id: 12,
      image: "/images/slide6.jpg",
      imageBg: "/images/slide6b.webp",
      title: "Black mirror",
    },
    {
      id: 13,
      image: "/images/slide1.jpg",
      imageBg: "/images/slide1b.webp",
      title: "1983",
    },
    {
      id: 14,
      image: "/images/slide2.jpg",
      imageBg: "/images/slide2b.webp",
      title: "Russian doll",
    },
    {
      id: 15,
      image: "/images/slide3.jpg",
      imageBg: "/images/slide3b.webp",
      title: "The rain",
    },
    {
      id: 16,
      image: "/images/slide4.jpg",
      imageBg: "/images/slide4b.webp",
      title: "Sex education",
    },
    {
      id: 17,
      image: "/images/slide5.jpg",
      imageBg: "/images/slide5b.webp",
      title: "Elite",
    },
    {
      id: 18,
      image: "/images/slide6.jpg",
      imageBg: "/images/slide6b.webp",
      title: "Black mirror",
    },
  ];

  return (
    <React.Fragment>
      <Grid item sm={12}>
        <Typography variant="h3" gutterBottom>
          {text}
        </Typography>
      </Grid>
      <Slider>
        {movies.map((movie) => (
          <Slider.Item movie={movie} key={movie.id}>
            item1
          </Slider.Item>
        ))}
      </Slider>
    </React.Fragment>
  );
};

export default SubsectionRow;
