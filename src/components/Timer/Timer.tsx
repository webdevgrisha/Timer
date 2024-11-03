import { useEffect, useRef, useState } from "react";
import "./Timer.css";
import TimerCircle from "./TimerCircle/TimerCircle";
import { toast } from "react-toastify";

interface TimerProps {
  title: string;
  endTime: number;
  elapsedTime?: number;
}

/**
 * Timer component that allows you to create a timer based on the number of seconds you pass in
 *
 * @component
 *
 * Props:
 * @prop {string} title - The title of the timer, displayed at the top of the component.
 * @prop {number} endTime - The total time in seconds that the timer will count up to.
 *                          Should be a value between 0 and 3599 seconds.
 * @prop {number} [elapsedTime=0] - The initial elapsed time in seconds when the timer starts.
 *                                  Defaults to 0 if not provided. Should be a value between 0 and 3599 seconds.
 *
 * State:
 * @state {number} currTime - Tracks the current elapsed time, updated every second when the timer is running.
 * @state {boolean} isRunning - Tracks if the timer is currently active.
 *
 * Refs:
 * @ref {NodeJS.Timeout | null} timerId - Stores the interval ID for the timer to manage start, pause, and reset functions.
 *
 * Methods:
 * @method handleStart - Starts the timer if it isn't already running. Sets isRunning to true.
 * @method handlePause - Pauses the timer if it is currently running. Sets isRunning to false.
 * @method handleReset - Resets the timer to 0 and stops any active interval.
 *
 * Additional Info:
 * This component has validation checks on the `endTime` and `elapsedTime` props to ensure they stay within the 0–3599 second range.
 * If the values exceed this range, an error will be thrown.
 */
function Timer({ title, endTime, elapsedTime = 0 }: TimerProps) {
  const [currTime, setCurrTime] = useState<number>(elapsedTime);
  const [isRunning, setIsRunning] = useState<boolean>(false);
  const timerId = useRef<null | NodeJS.Timeout>(null);

  useEffect(() => {
    if (endTime >= 3600 || endTime < 0) {
      toast.error("endTime should be between 0 and 3599 seconds.");
      throw new Error("endTime should be between 0 and 3599 seconds.");
    }

    if (elapsedTime >= 3600 || elapsedTime < 0) {
      toast.error("elapsedTime should be between 0 and 3599 seconds.");
      throw new Error("elapsedTime should be between 0 and 3599 seconds.");
    }

    if (elapsedTime > endTime) {
      toast.error("elapsedTime can't be greater than endTime.");
      throw new Error("elapsedTime can't be greater than endTime.");
    }

    return () => {
      if (timerId.current !== null) {
        clearInterval(timerId.current);
      }
    };
  }, []);

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
