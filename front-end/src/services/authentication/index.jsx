export default class Auth {
  constructor() {
    // this.logout();
    // this.login();
    if (!this.isAuthenticated()) {
      this.logout();
    }
    // console.log(this.isAuthenticated());
  }

  login() {
    localStorage.setItem("isAuthenticated", "true");
  }

  isAuthenticated() {
    // Checks if there is a saved token and it's still valid
    const token = localStorage.getItem("isAuthenticated");
    return token === "true";
  }

  isAdmin() {
    //api test
    const token = localStorage.getItem("fonctionnalite");
    return token === "isAdmin";
  }
  patient() {
    //api test
    const token = localStorage.getItem("fonctionnalite");
    return token === "patient";
  }
  secretaire() {
    //api test
    const token = localStorage.getItem("fonctionnalite");
    return token === "secretaire";
  }
  medecin() {
    //api test
    const token = localStorage.getItem("fonctionnalite");
    return token === "medecin";
  }

  logout() {
    // Clear user token and profile data from localStorage
    localStorage.setItem("isAuthenticated", false);
    localStorage.setItem("fonctionnalite", "");
  }
}
