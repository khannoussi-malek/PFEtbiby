import React, { useState, createContext } from "react";

export const TbibyContext = createContext();

const initialUserValues = {
  id: null,
  nom: null,
  prenom: null,
  isAuthenticated: false,
  telephone: null,
  email: null,
  cin: null,
  sexes: null,
  photo: null,
  fonctionnalite: "",
};

const TheContext = (props) => {
  const userValues =
    (localStorage.getItem("user") &&
      JSON.parse(localStorage.getItem("user"))) ||
    initialUserValues;

  const [user, setUser] = useState(userValues);
  const cleanUser = () => {
    localStorage.clear();
    setUser({});
  };
  return (
    <TbibyContext.Provider value={{ user, setUser, cleanUser }} {...props} />
  );
};

export default TheContext;
