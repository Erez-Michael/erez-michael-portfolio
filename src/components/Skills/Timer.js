import React from 'react';
import { CountdownCircleTimer } from "react-countdown-circle-timer";


const Timer = () => {
    
    const renderTime = ({ remainingTime }) => {
      return (
        <div className="timer">
          <div className="value">{remainingTime}</div>
        </div>
      );
    };

    return (
      <div className="timer-wrapper">
        <CountdownCircleTimer
          isPlaying
          duration={5}
          colors={["#004777", "#F7B801", "#A30000", "#A30000"]}
          colorsTime={[10, 6, 3, 0]}
          onComplete={() => ({ shouldRepeat: false })}
        >
          {renderTime}
        </CountdownCircleTimer>
      </div>
  );
}

export default Timer;