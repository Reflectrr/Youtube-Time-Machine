import React from "react";
import { Typography, Container, Grid } from "@material-ui/core";
import { useSelector } from "react-redux";
import SubsectionRow from "./SectionRow";

const HomePageView = () => {
  const classes = useSelector((state) => state.classes);
  // const video = useSelector(
  //   (state) => state.videos.chapelVideos[state.videos.chapelVideos.length - 1]
  // );
  // if (!video) return null;
  return (
    <div>
      <SubsectionRow text="What's New" />
      <SubsectionRow text="Chapel" />
      <SubsectionRow text="Early Morning Shows" />
      <SubsectionRow text="The Message" />
    </div>
  );
};

export default HomePageView;
