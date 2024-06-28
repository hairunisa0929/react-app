import { Route, Routes } from "react-router-dom";
import HomeRHF from "./pages/HomeRHF";
import { UserProvider } from "./context/UserContext";
import Summary from "./pages/Summary";
import Order from "./pages/Order";

function App() {
  return (
    <UserProvider>
      <Routes>
        <Route path="/" element={<HomeRHF />} />
        <Route path="/order" element={<Order/>} />
        <Route path="/summary" element={<Summary />} />
      </Routes>
    </UserProvider>
  );
}

export default App;
