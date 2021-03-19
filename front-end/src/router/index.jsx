import React, { useContext } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Dashboard from "./../pages/dashboard";
import { ReactQueryDevtools as ApiDevtools } from "react-query/devtools";
import log from "../pages/log";
import { QueryClient, QueryClientProvider } from "react-query";

import PrivateRoute from "./_partials/PrivateRoute";
import { authentication } from "./../services/authentication/auth";
import Error404 from "./../pages/404";
import TheContext, { TbibyContext } from "./context";
import PublicRoute from "./_partials/PublicRoute";
function MainRouter() {
  const { user } = useContext(TbibyContext);
  // const { isAuthenticated } = useContext(TbibyContext);
  // const auth = new Auth();
  const auth = authentication();
  const queryClient = new QueryClient();
  return (
    <React.Fragment>
      <Router>
        <Switch>
          {/* <Route component={log} exact path="/login" />
          <Route component={log} exact path="/singup" /> */}
          <PublicRoute
            component={log}
            path="/login"
            isAuth={user.isAuthenticated}
          />
          <PublicRoute
            component={log}
            path="/singup"
            isAuth={user.isAuthenticated}
          />
          <PrivateRoute
            component={Dashboard}
            path="/dashboard"
            isAuth={user.isAuthenticated}
          />
          <Route component={Error404} path="*" />
        </Switch>
      </Router>
    </React.Fragment>
  );
}

export default MainRouter;
