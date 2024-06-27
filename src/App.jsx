import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import HomeRHF from "./pages/HomeRHF";
import { UserProvider } from "./context/UserContext";
import Summary from "./pages/Summary";

function App() {
  return (
    <UserProvider>
      <Routes>
        <Route path="/" element={<HomeRHF />} />
        <Route path="/summary" element={<Summary />} />
      </Routes>
    </UserProvider>
  );
}

export default App;
