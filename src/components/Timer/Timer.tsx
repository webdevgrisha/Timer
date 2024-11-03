import { useEffect, useRef, useState } from "react";
import "./Timer.css";
import TimerCircle from "./TimerCircle/TimerCircle";
import { toast } from "react-toastify";

interface TimerProps {
  title: string;
  endTime: number;
  elapsedTime?: number;
}

function Timer({ title, endTime, elapsedTime = 0 }: TimerProps) {
  const [currTime, setCurrTime] = useState<number>(elapsedTime);
  const [isRunning, setIsRunning] = useState<boolean>(false);
  const timerId = useRef<null | NodeJS.Timeout>(null);

  useEffect(() => {
    return () => {
      if (timerId.current !== null) {
        clearInterval(timerId.current);
      }
    };
  }, []);

  if (endTime >= 3600 || endTime < 0) {
    toast.error("endTime should be between 0 and 3599 seconds.");
    throw new Error("endTime should be between 0 and 3599 seconds.");
  }

  if (elapsedTime >= 3600 || elapsedTime < 0) {
    toast.error("elapsedTime should be between 0 and 3599 seconds.");
    throw new Error("elapsedTime should be between 0 and 3599 seconds.");
  }

  const handleStart = () => {
    if (timerId.current !== null) {
      toast.warning("You've already started this timer.");
      return;
    }

    setIsRunning(true);

    timerId.current = setInterval(() => {
      setCurrTime((prevTime) => {
        if (prevTime >= endTime) {
          if (timerId.current !== null) clearInterval(timerId.current);
          timerId.current = null;

          setIsRunning(false);
          return endTime;
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

    setIsRunning(false);

    clearInterval(timerId.current);
    timerId.current = null;
    setCurrTime((prevTime) => prevTime);
  };

  const handleReset = () => {
    if (timerId.current !== null) {
      clearInterval(timerId.current);
      timerId.current = null;
    }

    setIsRunning(false);
    setCurrTime(0);
  };

  const currTimeFormat: string = convertTimeToFormat(currTime);
  const leftTimeFormat: string = convertTimeToFormat(endTime - currTime);

  const isStartDisabled: boolean = isRunning || currTime === endTime;
  const isResetDisabled: boolean = currTime === 0;

  return (
    <div className="timer">
      <div className="timer-container">
        <TimerCircle currTime={currTime} endTime={endTime} />
        <h5 className="title">{title}</h5>
        <span className="curr-time">{currTimeFormat}</span>
        <span className="left-time">{leftTimeFormat} left</span>
      </div>
      <footer>
        <button
          className="action-btn"
          disabled={isStartDisabled}
          onClick={handleStart}
        >
          Start
        </button>
        <button
          className="action-btn"
          disabled={!isRunning}
          onClick={handlePause}
        >
          Pause
        </button>
        <button
          className="action-btn"
          disabled={isResetDisabled}
          onClick={handleReset}
        >
          Reset
        </button>
      </footer>
    </div>
  );
}

function convertTimeToFormat(secCount: number): string {
  const minuts = String(Math.floor(secCount / 60)).padStart(2, "0");
  const seconds = String(secCount % 60).padStart(2, "0");

  return `${minuts}:${seconds}`;
}

export default Timer;
