import React from "react";
import ReactModal from "react-modal";
import Button from "../Button/Button";
import * as GameStyles from "../../gameStyles/GameStyles";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const WinModal = ({
  storeScores,
  isOpen,
  restartGame,
  stars,
  seconds,
  minutes
}) => {
  ReactModal.setAppElement("#root");
  return (
    <div>
      <ReactModal
        isOpen={isOpen}
        style={GameStyles.modalStyles}
        onRequestClose={restartGame}
        contentLobal="Memory Game Win Modal">
        <div style={GameStyles.modalContentStyle}>
          <h2>You Win!</h2>
          <br />
          <h3>Stats: </h3>
          <br />
          <p>
            Time: {minutes < 10 ? `0${minutes}` : minutes}:{seconds}
          </p>
          <p>
            Stars:{" "}
            {stars.map((star, i) => {
              return <FontAwesomeIcon key={`${star}-${i}`} icon={star} />;
            })}
          </p>
          <h4>Assessment: </h4>
          <div>
            <Button
              restartGame={restartGame}
              label={"Play Again?"}
              condition={"replay"}
            />
            {/* If clicked, set first modal closed, retrieve local storage
                and display win history. TODO: work on session storage params.
                Possible to ask for a username either before or after playing, 
                for storage purposes? Of course, but consult MDN for info. 
            */}
            <Button
              label="Save Scores?"
              onClick={() => {
                storeScores();
              }}
            />
          </div>
        </div>
      </ReactModal>
    </div>
  );
};

export default WinModal;
