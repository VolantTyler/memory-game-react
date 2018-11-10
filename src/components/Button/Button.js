import React from "react";
import * as ButtonStyles from "./ButtonStyles";

const Button = ({ restartGame, storeScores, label, condition }) => {
  return (
    <ButtonStyles.Button
      label={label}
      onClick={e => {
        condition === "replay" || condition === "whilePlaying"
          ? restartGame(condition)
          : storeScores();
      }}>
      {label}
    </ButtonStyles.Button>
  );
};

export default Button;
