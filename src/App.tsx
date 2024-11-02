import "./App.css";
import { Timer } from "./components/index.ts";

function App() {
  return (
    <>
      <Timer title={"First timer"} endTime={5} />
    </>
  );
}

export default App;
