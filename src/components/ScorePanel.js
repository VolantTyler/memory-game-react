import React from "react";
import Stars from "../components/Stars";
import Time from "../components/Time";
import Restart from "../components/Restart";
import VolumeSlide from "../components/VolumeSlide";
import Gear from "./Gear";
import * as GameStyles from "../gameStyles/GameStyles";

const ScorePanel = ({
  restartGame,
  initClickCount,
  seconds,
  minutes,
  stars,
  handleVolumeSlide,
  volume,
  gearClicked,
  handleGear,
  changeStyle
}) => {
  const { scorePanelStyle } = GameStyles;
  return (
    <div style={scorePanelStyle}>
      <Stars stars={stars} />
      <Time seconds={seconds} minutes={minutes} />
      <Restart
        restartGame={restartGame}
        label={"Start Over?"}
        condition={"whilePlaying"}
      />
      <VolumeSlide
        initClickCount={initClickCount}
        handleVolumeSlide={handleVolumeSlide}
        volume={volume}
      />
      <Gear
        gearClicked={gearClicked}
        handleGear={handleGear}
        changeStyle={changeStyle}
      />
    </div>
  );
};

export default ScorePanel;
