import { useContext } from "react";
import AuthContext from "../contexts/AuthContext";
import { Navigate, useLocation } from "react-router-dom";

const PrivateRoute = ({ children }) => {
  const { user, loading } = useContext(AuthContext);

  const {pathname} = useLocation()


  if(loading) {
    return <h1>Loading</h1>
  }

  if (!user) {
    return <Navigate state={pathname} to="/login"></Navigate>;
  }

  return children;
};

export default PrivateRoute;
