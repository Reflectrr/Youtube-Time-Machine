import React from "react";
import { useSelector } from "react-redux";
import SectionRow from "../components/SectionRow";
import FeaturingSection from "../components/FeaturingSection";

const HomePageView = () => {
  const channels = useSelector((state) => state.channels);
  const selectedChannel = channels.selectedChannel;
  const selectedVideo = channels.selectedVideo;

  const SectionRows = channels.homepage.map((channel, index) => {
    return (
      <SectionRow
        channel={channel}
        key={`sectionRow-${channel.channelId}-${index}`}
      />
    );
  });

  return (
    <div>
      {selectedVideo && <FeaturingSection video={selectedVideo} />}

      {selectedChannel ? (
        <SectionRow
          channel={selectedChannel}
          key={`sectionRow-selected-${selectedChannel.channelId}`}
        />
      ) : (
        SectionRows
      )}
    </div>
  );
};

export default HomePageView;
