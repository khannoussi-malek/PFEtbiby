import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Dashbord from "./../pages/dashboard";
import { ReactQueryDevtools as ApiDevtools } from "react-query/devtools";
import log from "../pages/log";
import { QueryClient, QueryClientProvider } from "react-query";

import PrivateRoute from "./_partials/PrivateRoute";
import { authentication } from "./../services/authentication/auth";
import Error404 from "./../pages/404";
function MainRouter() {
  // const auth = new Auth();
  const auth = authentication();
  const queryClient = new QueryClient();
  return (
    <React.Fragment>
      <QueryClientProvider client={queryClient}>
        <Router>
          <Switch>
            <Route component={log} exact path="/login" />
            <Route component={log} exact path="/singup" />
            <PrivateRoute component={Dashbord} path="/Dashbord" isAuth={auth} />
            <Route component={Error404} path="*" />
          </Switch>
        </Router>
        <ApiDevtools initialIsOpen={false} />
      </QueryClientProvider>
    </React.Fragment>
  );
}

export default MainRouter;
