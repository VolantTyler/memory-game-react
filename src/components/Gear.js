import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Settings from "../components/Settings";

const Gear = ({ gearClicked, handleGear, changeStyle }) => {
  const gearStyle = {
    position: "fixed",
    fontSize: "5.5rem",
    top: "-7px",
    right: "7px"
  };
  return (
    <div onClick={() => handleGear()} style={gearStyle}>
      <FontAwesomeIcon icon="cog" />
      {gearClicked && (
        <Settings gearClicked={gearClicked} changeStyle={changeStyle} />
      )}
    </div>
  );
};

export default Gear;
