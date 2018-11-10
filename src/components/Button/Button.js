import React from "react";
import * as ButtonStyles from "./ButtonStyles";

const Button = ({ restartGame, storeScores, label, condition }) => {
  const { Button } = ButtonStyles;
  return (
    <Button
      label={label}
      onClick={e => {
        condition === "replay" || condition === "whilePlaying"
          ? restartGame(condition)
          : storeScores();
      }}>
      {label}
    </Button>
  );
};

export default Button;
