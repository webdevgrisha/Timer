import "./Timer.css";

interface TimerProps {
  title: string;
  endTime: number;
  elspsedTime?: number;
}

function Timer({ title, endTime }: TimerProps) {
  return (
    <div className="timer">
      <div className="timer-container">
        <svg
          className="timer-border"
          viewBox="0 0 100 100"
          preserveAspectRatio="xMidYMid meet"
        >
          <circle
            cx="50"
            cy="50"
            r="45"
            className="background"
            stroke-width="3"
          ></circle>

          {/* <circle
            cx="50"
            cy="50"
            r="45"
            className="progress"
            stroke-width="5"
          ></circle> */}
        </svg>
        <h5 className="title">{title}</h5>
        <span className="curr-time">00:00</span>
        <span className="left-time">25:00 left</span>
      </div>
      <footer>
        <button className="action-btn">Start</button>
        <button className="action-btn">Pause</button>
        <button className="action-btn">Reset</button>
      </footer>
    </div>
  );
}

export default Timer;
