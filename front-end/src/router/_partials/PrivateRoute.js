import React from "react";
import { Route, Redirect } from "react-router-dom";

export const PrivateRoute = ({ isAuth, ...otherProps }) => {
  if (isAuth) {
    return <Route exact {...otherProps} />;
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
