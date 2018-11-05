import React from "react";
import ReactModal from "react-modal";
import Restart from "../components/Restart";
import * as GameStyles from "../gameStyles/GameStyles";

const WinModal = ({ storeScores, isOpen, restartGame }) => {
  ReactModal.setAppElement("#root");
  return (
    <div>
      <ReactModal
        isOpen={isOpen}
        style={GameStyles.modalStyles}
        onRequestClose={restartGame}
        contentLobal="Memory Game Win Modal">
        <h2>You Win!</h2>
        <br />
        <h3>Stats: </h3>
        <br />
        <p>Time: </p>
        <p>Score: 100%</p>
        <p>Stars: star star star</p>
        <h4>Assessment: </h4>
        <div>
          <Restart
            restartGame={restartGame}
            label={"Play Again?"}
            condition={"replay"}
          />

          <button
            onClick={() => {
              storeScores();
            }}>
            Save Scores?
          </button>
        </div>
      </ReactModal>
    </div>
  );
};

export default WinModal;
