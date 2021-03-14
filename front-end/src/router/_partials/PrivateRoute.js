import React from "react";
import { Route, Redirect, useLocation } from "react-router-dom";

export const PrivateRoute = ({ isAuth, ...otherProps }) => {
  const { pathname } = useLocation();

  if (isAuth) {
    return <Route {...otherProps} />;
  }

  return (
    <Redirect
      to={{
        pathname: "/login",
        search: pathname ? `?redirect=${pathname}` : null,
      }}
    />
  );
};

export default PrivateRoute;
