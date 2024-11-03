import "./App.css";
import { Timer } from "./components/index.ts";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <>
      <Timer title={"First timer ffsdjkfshjdfhsdhjfgbshfdbhsdhfbsdbvwseFBUsdhvusdVUsvbuysBVDFShbhjvsdbfV"} endTime={5} />
      <ToastContainer />
    </>
  );
}

export default App;
