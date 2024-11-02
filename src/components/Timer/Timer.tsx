import { useRef, useState } from "react";
import "./Timer.css";
import TimerCircle from "./TimerCircle/TimerCircle";
import { toast } from "react-toastify";

interface TimerProps {
  title: string;
  endTime: number;
  elspsedTime?: number;
}

function Timer({ title, endTime, elspsedTime = 0 }: TimerProps) {
  const [currTime, setCurrTime] = useState<number>(elspsedTime);
  const timerId = useRef<null | NodeJS.Timeout>(null);

  if (endTime >= 3600 || endTime < 0) {
    toast.error("endTime can be greater than 59 minutes and 59 seconds or less then 0!");
    throw new Error("endTime can be greater than 59 minutes and 59 seconds or less then 0!");
  }

  if(elspsedTime >= 3600 || elspsedTime < 0) {
    toast.error("elspsedTime can be greater than 59 minutes and 59 seconds!");
    throw new Error("endTime can be greater than 59 minutes and 59 seconds!");
  }

  const handleStart = () => {
    if (timerId.current !== null) {
      toast.warning(
        "You've already started this timer."
      );
      return;
    }

    timerId.current = setInterval(function run() {
      if (currTime === endTime) {
        clearInterval(timerId.current!);
        timerId.current = null;
        return;
      }

      setCurrTime((prevTime) => {
        if (prevTime === endTime) {
          clearInterval(timerId.current!);
          timerId.current = null;
          return prevTime;
        }

        return prevTime + 1;
      });
    }, 1000);
  };

  const handlePause = () => {
    if (timerId.current === null) {
      toast.warning(
        "You can't stop a timer that hasn't started or has already stopped!"
      );
      return;
    }

    clearInterval(timerId.current);
    timerId.current = null;
  };

  const handleReset = () => {
    if (timerId.current !== null) {
      clearInterval(timerId.current);
      timerId.current = null;
    }

    setCurrTime(0);
  };

  const currTimeFormat: string = convertTimeToFormat(currTime);
  const leftTimeFormat: string = convertTimeToFormat(endTime - currTime);

  return (
    <div className="timer">
      <div className="timer-container">
        <TimerCircle currTime={currTime} endTime={endTime} />
        <h5 className="title">{title}</h5>
        <span className="curr-time">{currTimeFormat}</span>
        <span className="left-time">{leftTimeFormat} left</span>
      </div>
      <footer>
        <button className="action-btn" onClick={handleStart}>
          Start
        </button>
        <button className="action-btn" onClick={handlePause}>
          Pause
        </button>
        <button className="action-btn" onClick={handleReset}>
          Reset
        </button>
      </footer>
    </div>
  );
}

function convertTimeToFormat(currTime: number): string {
  const minuts = String(Math.floor(currTime / 60)).padStart(2, "0");
  const seconds = String(currTime % 60).padStart(2, "0");

  return `${minuts}:${seconds}`;
}

export default Timer;
