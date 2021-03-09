import { React, Component } from "react";
import AuthService from "./../../services/authentication";
class Home extends Component {
  render() {
    return (
      <h1
        onClick={() => {
          AuthService.logout();
        }}
      >
        this is home
      </h1>
    );
  }
}

export default Home;
