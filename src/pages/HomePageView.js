import React from "react";
import { Typography, Container, Grid } from "@material-ui/core";
import { useSelector } from "react-redux";
import SectionRow from "../components/SectionRow";

const HomePageView = () => {
  const classes = useSelector((state) => state.classes);
  // const video = useSelector(
  //   (state) => state.videos.chapelVideos[state.videos.chapelVideos.length - 1]
  // );
  // if (!video) return null;
  return (
    <div>
      <SectionRow text="What's New" type="newVideos" />
      <SectionRow text="Chapel" type="chapelVideos" />
      <SectionRow text="Early Morning Shows" type="earlyMorningShows" />
      <SectionRow text="The Message" type="messageVideos" />
    </div>
  );
};

export default HomePageView;
