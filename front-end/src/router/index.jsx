import React from "react";
import Auth from "./../services/authentication";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

// import PublicRouter from "./public";
// import SpecialRouter from "./Special";
// import { isLogin } from "./../services/authentication/index";

import Singup from "../pages/Sing up";
import Login from "../pages/Login";
import Home from "./../pages/home";
import PrivateRoute from "./_partials/PrivateRoute";
function MainRouter() {
  var auth = new Auth();
  return (
    <React.Fragment>
      <Router>
        <Switch>
          <Route component={Login} exact path="/login" />
          <Route component={Singup} exact path="/singup" />
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
