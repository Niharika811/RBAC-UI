import React from "react";
import { Navigate } from "react-router-dom";
import { useUserAuth } from "./context/UserAuthContext"; 

const ProtectedRoute = ({ children, allowedRoles }) => {
  const { auth } = useUserAuth();
  if (!auth) {
    return <Navigate to="/" />;
  }

  if (allowedRoles && !allowedRoles.includes(auth.role)) {
    return <Navigate to="/unauthorized" />;
  }

  return children;
};

export default ProtectedRoute;
