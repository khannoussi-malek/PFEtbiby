import logo from "./logo.svg";
import "./App.css";
import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Login from "./componentes/log/login";
function App() {
  return (
    <React.Fragment>
      <Router>
        <Switch>
          <Route path="/login">
            <Login></Login>
          </Route>
        </Switch>
      </Router>
    </React.Fragment>
  );
}

export default App;
