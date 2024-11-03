import { useState } from "react";
import "./App.css";
import { Timer, TimerErrorBoundary, TimerForm } from "./components/index.ts";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { TimerConfig } from "./interfaces.ts";

function App() {
  const [timerConfig, setTimerConfig] = useState<TimerConfig>({
    timerName: "",
    endTime: "",
    elapsedTime: "",
  });

  const timerKey = `${timerConfig.timerName}-${timerConfig.endTime}-${timerConfig.elapsedTime}`;

  return (
    <>
      <div className="app-container">
        <header>
          <h1>
            JETBRAINS - Test assignment (Frontend Developer)
            <br /> Ryhor Roi
          </h1>
        </header>
        <TimerForm updateFunc={setTimerConfig} />
        <TimerErrorBoundary key={timerKey}>
          <Timer
            title={timerConfig.timerName}
            endTime={+timerConfig.endTime}
            elapsedTime={+timerConfig.elapsedTime}
          />
        </TimerErrorBoundary>
      </div>
      <ToastContainer />
    </>
  );
}

export default App;
