import { Navigate, Outlet } from "react-router-dom";

function PrivateRoute() {
  const user = true;

  return user ? <Outlet /> : <Navigate to="/log-in" />;
}

export default PrivateRoute;
