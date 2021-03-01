import React from "react";
import SectionRow from "../components/SectionRow";
import FeaturingSection from "../components/FeaturingSection";
import { useSelector } from "react-redux";
const EMSView = () => {
  const video = useSelector((state) => state.videos.earlyMorningShows)[0];
  return (
    <React.Fragment>
      {/* {video && <FeaturingSection video={video} />} */}
      <SectionRow text="Early Morning Show" type="earlyMorningShows" />
    </React.Fragment>
  );
};

export default EMSView;
