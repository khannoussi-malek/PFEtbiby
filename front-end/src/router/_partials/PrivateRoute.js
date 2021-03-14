import React from "react";
import { Route, Redirect } from "react-router-dom";

export const PrivateRoute = ({ isAuth, ...otherProps }) => {
  if (isAuth) {
    return <Route {...otherProps} />;
  }

  return (
    <Redirect
      to={{
        pathname: "/login",
      }}
    />
  );
};

export default PrivateRoute;
