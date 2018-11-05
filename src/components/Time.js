import React from "react";

const Time = ({ seconds, minutes }) => {
  // clock logic is off by two seconds at the top of each minute
  const sec = seconds === 0 ? `00` : seconds < 10 ? `0${seconds}` : seconds;
  const min = minutes === 0 ? `00` : minutes < 10 ? `0${minutes}` : minutes;
  return (
    <div>
      <div>
        {min}:{sec}
      </div>
    </div>
  );
};

export default Time;
