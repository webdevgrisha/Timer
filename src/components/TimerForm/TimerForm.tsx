import "./TimerForm.css";
import { TimerConfig } from "../../interfaces.ts";
import { useImmer } from "use-immer";

interface TimerFormProps {
  updateFunc: (timerConfig: TimerConfig) => void;
}

function TimerForm({ updateFunc }: TimerFormProps) {
  const [timerConfig, setTimerConfig] = useImmer<TimerConfig>({
    timerName: "Timer 1",
    endTime: "60",
    elapsedTime: "",
  });

  const handleInputChange = (name: string, value: string) => {
    setTimerConfig((draft) => {
      draft[name as keyof TimerConfig] = value;
    });
  };

  const handleSave = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    updateFunc(timerConfig);
  };

  return (
    <form className="timer-config" onSubmit={handleSave}>
      <input
        type="text"
        placeholder="Timer name"
        onChange={(e) => handleInputChange("timerName", e.target.value)}
        value={timerConfig.timerName}
      />
      <input
        type="number"
        placeholder="Time in seconds"
        onChange={(e) => handleInputChange("endTime", e.target.value)}
        value={timerConfig.endTime}
      />
      <input
        type="number"
        placeholder="Elapsed time in seconds"
        onChange={(e) => handleInputChange("elapsedTime", e.target.value)}
        value={timerConfig.elapsedTime}
      />

      <button>Save</button>
    </form>
  );
}

export default TimerForm;
