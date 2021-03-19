import React from "react";
import { Route, Redirect } from "react-router-dom";

export const PublicRoute = ({ isAuth, ...otherProps }) => {
  if (!isAuth) {
    return <Route {...otherProps} />;
  }

  return (
    <Redirect
      to={{
        pathname: "/dashboard",
      }}
    />
  );
};

export default PublicRoute;
