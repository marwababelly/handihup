import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { useAuth } from '../Context/AuthContext'; 
const PrivateRoute = ({ children, ...rest }) => {
  const { isAuthenticated, userRole } = useAuth();
  const allowedRoles = ['admin', 'owner', 'user']; 
  const location = useLocation();

  console.log("Current user role:", userRole); 
  console.log("Is authenticated:", isAuthenticated); 

  const isAllowed = isAuthenticated && allowedRoles.includes(userRole);

  if (!isAllowed) {
    console.log("User redirected to login due to lack of permission."); 
    return <Navigate to="/LogIn" state={{ from: location }} replace />;
  }

  return <>{children}</>;
};

export default PrivateRoute;
