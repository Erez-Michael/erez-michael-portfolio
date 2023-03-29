import React, { useState, useRef, useEffect } from "react";
import { Wrapper, Time } from "./TimerStyles";

const Timer = () => {
    const Ref = useRef(null);

    // The state for our timer
    const [timer, setTimer] = useState();

    const getTimeRemaining = (e) => {
      const total = Date.parse(e) - Date.parse(new Date());
      const seconds = Math.floor((total / 1000) % 60);
    
      return {
        total,
        seconds,
      };
    };

    const startTimer = (e) => {
      let { total, seconds } = getTimeRemaining(e);
      if (total >= 0) {
        // update the timer
        setTimer(
            (seconds > 9 ? seconds :  seconds)
        );
      }
    };

    const clearTimer = (e) => {
      // If you adjust it you should also need to
      // adjust the Endtime formula we are about
      // to code next
      setTimer("3");

      // If you try to remove this line the
      // updating of timer Variable will be
      // after 1000ms or 1sec
      if (Ref.current) clearInterval(Ref.current);
      const id = setInterval(() => {
        startTimer(e);
      }, 1000);
      Ref.current = id;
    };

    const getDeadTime = () => {
      let deadline = new Date();

      // This is where you need to adjust if
      // you entend to add more time
      deadline.setSeconds(deadline.getSeconds() + 3);
      return deadline;
    };

    // We can use useEffect so that when the component
    // mount the timer will start as soon as possible

    // We put empty array to act as componentDid
    // mount only
    useEffect(() => {
      clearTimer(getDeadTime());
    }, []);

    // Another way to call the clearTimer() to start
    // the countdown is via action event from the
    // button first we create function to be called
    // by the button
    const onClickReset = () => {
      clearTimer(getDeadTime());
    };
  

  return (
    <Wrapper>
      <Time>{timer}</Time>
    </Wrapper>
  );
};

export default Timer;
