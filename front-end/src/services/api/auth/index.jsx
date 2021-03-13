import { useMutation } from "react-query";
import axios from "./../";
export const useLogin = (config) => {
  return useMutation(
    ({ user, password }) => axios.post("/login", { user, password }),
    config
  );
};
export const useSingup = (config) => {
  return useMutation(
    ({ cin, email, id_cms_privileges, nom, password, prenom, telephone }) =>
      axios.post("/singup", {
        cin,
        email,
        id_cms_privileges,
        nom,
        password,
        prenom,
        telephone,
      }),
    config
  );
};
