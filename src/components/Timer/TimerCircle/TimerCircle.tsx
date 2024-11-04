import "./TimerCircle.css";
import classNames from "classnames";

interface TimerCircleProps {
  currTime: number;
  endTime: number;
}

/**
 * TimerCircle component that visually represents the progress of a timer using an SVG circle.
 *
 * @component
 *
 * Props:
 * @prop {number} currTime - The current elapsed time of the timer in seconds.
 *                            Used to calculate the progress of the circle.
 * @prop {number} endTime - The total time for the timer in seconds. Represents 100% of the circle's progress.
 *
 * Calculations:
 * - `circleLength`: Represents the circumference of the circle based on its radius (45).
 * - `progress`: The percentage of time elapsed, calculated as `currTime / endTime`.
 * - `offset`: Adjusts the stroke offset for the progress circle to visualize the remaining time.
 */
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
        strokeWidth="4"
      ></circle>

      <circle
        cx="50"
        cy="50"
        r="45"
        className="progress"
        strokeWidth="4"
        strokeDasharray={circleLength}
        strokeDashoffset={offset}
      ></circle>
    </svg>
  );
}

export default TimerCircle;
