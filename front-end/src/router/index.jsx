import React from "react";
import Auth from "./../services/authentication";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Dashbord from "./../pages/dashboard";

import log from "../pages/log";
import Home from "./../pages/home";
import PrivateRoute from "./_partials/PrivateRoute";
function MainRouter() {
  var auth = new Auth();
  return (
    <React.Fragment>
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
    </React.Fragment>
  );
}

export default MainRouter;
