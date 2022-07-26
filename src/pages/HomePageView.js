import React, { useState } from "react";
import { useSelector } from "react-redux";
import AutoComplete from "../components/AutoComplete";

const HomePageView = () => {
  const classes = useSelector((state) => state.classes);
  // const video = useSelector(
  //   (state) => state.videos.chapelVideos[state.videos.chapelVideos.length - 1]
  // );
  // if (!video) return null;
  //const { search } = useStyles();

  const [showClearIcon, setShowClearIcon] = useState("none");

  const handleChange = (event) => {
    setShowClearIcon(event.target.value === "" ? "none" : "flex");
  };

  const handleClick = () => {
    console.log("clicked the clear icon...");
  };

  return (
    <div>
      <AutoComplete />
      {/*
      <SectionRow text="What's New" type="newVideos" />
      <SectionRow text="Chapel" type="chapelVideos" />
      <SectionRow text="Early Morning Shows" type="earlyMorningShows" />
      <SectionRow text="The Message" type="messageVideos" />
      */}
    </div>
  );
};

export default HomePageView;
