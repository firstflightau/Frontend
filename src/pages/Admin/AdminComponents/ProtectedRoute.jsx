import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";

const ProtectedRoute = () => {
  // const isAuthenticated = JSON.parse(sessionStorage.getItem("AdminLogin"));
  const reducerState = useSelector((state) => state.auth);
  const token = reducerState?.user?.data?.isAdmin;

  // console.log(isAuthenticated, "autheticda");

  if (!token) {
    return <Navigate to="/" replace />;
  }
  return <Outlet />;
};

export default ProtectedRoute;
