import React, { useState } from "react";
import { useSelector } from "react-redux";
import AutoComplete from "../components/AutoComplete";
import SectionRow from "../components/SectionRow";

const HomePageView = () => {
  const user = useSelector((state) => state.user);
  const channels = useSelector((state) => state.channels);
  const [showClearIcon, setShowClearIcon] = useState("none");

  const handleChange = (event) => {
    setShowClearIcon(event.target.value === "" ? "none" : "flex");
  };

  const handleClick = () => {
    console.log("clicked the clear icon...");
  };

  const SectionRows = channels.map((channel, index) => {
    return (
      <SectionRow
        channel={channel}
        index={index}
        token={user.token}
        key={`sectionRow-${channel.channelId}-${index}`}
      />
    );
  });

  return (
    <div>
      <AutoComplete />
      {SectionRows}
    </div>
  );
};

export default HomePageView;
