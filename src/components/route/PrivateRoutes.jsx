import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";

export default function PrivateRoutes() {
  const isNotLogin = useSelector((state) => state.auth.token === "");

  // Jika isNotLogin true, saat user mengakses halaman selain login, 
  // maka akan diredirect ke halaman login
  if (isNotLogin) {
    return <Navigate to="/login" />;
  }

  return <Outlet />;
}
