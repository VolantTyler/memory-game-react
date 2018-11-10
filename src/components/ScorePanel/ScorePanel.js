import React from "react";
import Stars from "./Stars";
import Time from "./Time";
import Button from "../Button/Button";
import VolumeSlide from "./VolumeSlide";
import Gear from "../Settings/Gear";
import { ScorePanelStyle } from "./ScorePanelStyles";

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
  return (
    <ScorePanelStyle>
      <Stars stars={stars} />
      <Time seconds={seconds} minutes={minutes} />
      <Button
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
    </ScorePanelStyle>
  );
};

export default ScorePanel;
