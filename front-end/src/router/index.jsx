import React from "react";
import Auth from "./../services/authentication";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Dashbord from "./../pages/dashboard";
import { ReactQueryDevtools as ApiDevtools } from "react-query/devtools";
import log from "../pages/log";
import {
  useQuery,
  useMutation,
  useQueryClient,
  QueryClient,
  QueryClientProvider,
} from "react-query";
import Home from "./../pages/home";
import PrivateRoute from "./_partials/PrivateRoute";
// import Api from "./../services/api/index";

function MainRouter() {
  // var api = new Api();
  // console.log(api.post("login", { password: "123", user: "malek" }, "POST"));
  var auth = new Auth();
  const queryClient = new QueryClient();
  return (
    <React.Fragment>
      <QueryClientProvider client={queryClient}>
        <Router>
          <Switch>
            <Route component={log} exact path="/login" />
            <Route component={log} exact path="/singup" />
            <PrivateRoute
              component={Dashbord}
              exact
              path="/dashbord"
              exact
              isAuthenticated={auth.isAuthenticated}
            />
            <PrivateRoute
              path="/home"
              exact
              isAuthenticated={auth.isAuthenticated}
              component={Home}
            />
            ;
          </Switch>
        </Router>
        <ApiDevtools initialIsOpen={false} />
      </QueryClientProvider>
    </React.Fragment>
  );
}

export default MainRouter;
