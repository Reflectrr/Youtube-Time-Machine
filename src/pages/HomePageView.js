import React from "react";
import { useSelector } from "react-redux";
import AutoComplete from "../components/AutoComplete";
import SectionRow from "../components/SectionRow";

const HomePageView = () => {
  const user = useSelector((state) => state.user);
  const channels = useSelector((state) => state.channels);
  const selected = channels.selected;
  console.log("selected", selected);

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
      <AutoComplete />
      {selected ? (
        <SectionRow
          channel={selected}
          key={`sectionRow-selected-${selected.channelId}`}
        />
      ) : (
        SectionRows
      )}
    </div>
  );
};

export default HomePageView;
