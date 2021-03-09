// Inspiration for this component from: https://react-router.now.sh/auth-workflow
// Routes user to the component if context shows them as being logged in
// Otherwise, routes them to the login page

import React from "react";
import { Route, Redirect } from "react-router-dom";
import { isLogin } from "./../../services/authentication/index";

const PrivateRoute = ({
  component: Component,
  isAuthenticated: isAuthenticated,
  ...rest
}) => {
  return (
    <Route
      {...rest}
      render={(props) =>
        isAuthenticated() ? <Component {...props} /> : <Redirect to="/login" />
      }
    />
  );
};

export default PrivateRoute;
