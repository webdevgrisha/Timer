import "./TimerCircle.css";
import classNames from "classnames";

interface TimerCircleProps {
  currTime: number;
  endTime: number;
}

function TimerCircle({ currTime, endTime }: TimerCircleProps) {
  const circleLength = 2 * Math.PI * 45;
  const progress = currTime / endTime;
  const offset = circleLength - progress * circleLength;

  const timerBorderClasses = classNames({
    "timer-border": true,
    finished: offset === 0,
  });

  return (
    <svg
      className={timerBorderClasses}
      viewBox="0 0 100 100"
      preserveAspectRatio="xMidYMid meet"
    >
      <circle
        cx="50"
        cy="50"
        r="45"
        className="background"
        strokeWidth="5"
      ></circle>

      <circle
        cx="50"
        cy="50"
        r="45"
        className="progress"
        strokeWidth="5"
        strokeDasharray={circleLength}
        strokeDashoffset={offset}
      ></circle>
    </svg>
  );
}

export default TimerCircle;
