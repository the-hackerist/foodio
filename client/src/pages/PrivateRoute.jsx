import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "../contexts/UserContext";

function PrivateRoute() {
  const { user } = useAuth();

  return user ? <Outlet /> : <Navigate to="/log-in" />;
}

export default PrivateRoute;
