import React from "react";
import { useSelector } from "react-redux";
import SectionRow from "../components/SectionRow";

const HomePageView = () => {
  const channels = useSelector((state) => state.channels);
  const selectedChannel = channels.selectedChannel;

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
