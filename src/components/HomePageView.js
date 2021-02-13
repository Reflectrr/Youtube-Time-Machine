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
      <SubsectionRow text="What's New" type="newVideos" />
      {/* TODO */}
      <SubsectionRow text="Chapel" type="chapelVideos" />
      <SubsectionRow text="Early Morning Shows" type="earlyMorningShows" />
      <SubsectionRow text="The Message" type="messageVideos" />
    </div>
  );
};

export default HomePageView;
