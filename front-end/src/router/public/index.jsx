import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Singup from "../../pages/Sing up";
import Login from "../../pages/Login";
function PublicRouter() {
  return (
    <React.Fragment>
      <Router>
        <Switch>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/singup">
            <Singup />
          </Route>
        </Switch>
      </Router>
    </React.Fragment>
  );
}

export default PublicRouter;
