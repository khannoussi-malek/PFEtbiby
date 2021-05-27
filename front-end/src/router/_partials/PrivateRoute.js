import React, { useContext } from "react";
import { Route, Redirect } from "react-router-dom";
import { TbibyContext } from "./../context/index";

export const PrivateRoute = ({ isAuth, ...otherProps }) => {
  const { user } = useContext(TbibyContext);
  if (user.isAuthenticated) {
    if (isAuth) {
      return <Route exact {...otherProps} />;
    } else {
      return (
        <Redirect
          to={{
            pathname: "/dashboard",
          }}
        />
      );
    }
  } else {
    return (
      <Redirect
        to={{
          pathname: "/login",
        }}
      />
    );
  }
};

export default PrivateRoute;
