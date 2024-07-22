import { Route, Routes } from "react-router-dom";
import HomeOneState from "./pages/HomeOneState";
import HomeManyStates from "./pages/HomeManyStates";
import HomeRHF from "./pages/HomeRHF";

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomeOneState />} />
    </Routes>
  );
}

export default App;
