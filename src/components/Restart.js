import React from "react";

const Restart = ({ restartGame, label, condition }) => {
  return (
    <button
      onClick={e => {
        console.log(condition);
        restartGame(condition);
      }}>
      {label}
    </button>
  );
};

export default Restart;
