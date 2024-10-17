import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "../contexts/UserContext";
import { useMenu } from "../contexts/MenuContext";

function PrivateRoute() {
  const { user } = useAuth();

  const { setMenu } = useMenu();

  if (!user) setMenu("log-in");

  return user ? <Outlet /> : <Navigate to="/log-in" />;
}

export default PrivateRoute;
