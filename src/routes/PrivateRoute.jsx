import { useContext } from "react";
import AuthContext from "../contexts/AuthContext";
import { Navigate, useLocation } from "react-router-dom";
import Loading from "../components/Loading";

const PrivateRoute = ({ children }) => {
  const { user, loading } = useContext(AuthContext);

  const {pathname} = useLocation()


  if(loading) {
    return <Loading />
  }

  if (!user) {
    return <Navigate state={pathname} to="/login"></Navigate>;
  }

  return children;
};

export default PrivateRoute;
