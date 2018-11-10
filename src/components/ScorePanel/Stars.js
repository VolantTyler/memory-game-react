import React from "react";
import { Icon, starStyle } from "./ScorePanelStyles";

const Stars = ({ stars }) => {
  return (
    <div>
      {stars.map((star, i) => (
        <Icon key={`${star}-${i}`} icon={stars[i]} style={starStyle} />
      ))}
    </div>
  );
};

export default Stars;
