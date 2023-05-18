import { useContext } from "react";
import { Navigate } from "react-router";
import { useLocation } from "react-router-dom";
import { AuthContext } from "../context/AuthProvider";

const PrivateRoute = ({ children }) => {
  const { user, loading } = useContext(AuthContext);
  const location = useLocation();
  console.log(location);
  if (loading) {
    return loading;
  }
  if (user) return children;
  return <Navigate state={{ from: location }} to={"/login"} replace />;
};

export default PrivateRoute;
