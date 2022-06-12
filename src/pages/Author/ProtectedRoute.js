import React from "react";
import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ children, isAuth }) => {
  if (!isAuth) {
    return <Navigate to={"/"} />;
  }
  return children;
};
export default ProtectedRoute;
