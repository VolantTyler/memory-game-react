import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Stars = ({ stars }) => {
  return (
    <div>
      {stars.map((star, i) => (
        <FontAwesomeIcon key={`${star}-${i}`} icon={stars[i]} />
      ))}
    </div>
  );
};

export default Stars;
