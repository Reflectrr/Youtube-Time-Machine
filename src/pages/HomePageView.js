import React, { useState } from "react";
import { useSelector } from "react-redux";
import AutoComplete from "../components/AutoComplete";
import SectionRow from "../components/SectionRow";

const HomePageView = () => {
  const user = useSelector((state) => state.user);
  const [showClearIcon, setShowClearIcon] = useState("none");

  const handleChange = (event) => {
    setShowClearIcon(event.target.value === "" ? "none" : "flex");
  };

  const handleClick = () => {
    console.log("clicked the clear icon...");
  };

  const subscriptions = user.subscriptions ? user.subscriptions : [];
  const SectionRows = subscriptions.map((sub) => {
    return (
      <SectionRow
        text={sub.title}
        channelId={sub.channelId}
        token={user.token}
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
