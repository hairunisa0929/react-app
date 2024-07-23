import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";

export default function GuestRoute() {
  const isLogin = useSelector((state) => state.auth.token !== "");

  // Jika isLogin true, saat user mengakses halaman login, maka akan diredirect ke halaman admin
  if (isLogin) {
    return <Navigate to="/admin" />;
  }

  return <Outlet />;
}
