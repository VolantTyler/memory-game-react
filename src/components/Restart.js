import React from "react";

const Restart = ({ restartGame, label, condition }) => {
  const buttonPanelStyle = {
    borderRadius: "2px",
    backgroundColor: "rgba(139, 22, 10, 0.3)",
    border: "none",
    padding: ".5rem"
  };
  const buttonModalStyle = {};
  return (
    <button
      style={label === "Play Again" ? buttonModalStyle : buttonPanelStyle}
      onClick={e => {
        console.log(condition);
        restartGame(condition);
      }}>
      {label}
    </button>
  );
};

export default Restart;
