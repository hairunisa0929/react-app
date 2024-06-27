import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import HomeRHF from "./pages/HomeRHF";

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomeRHF />} />
    </Routes>
  );
}

export default App;
