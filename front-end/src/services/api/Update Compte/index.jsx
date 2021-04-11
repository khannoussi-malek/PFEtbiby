import { useMutation, useQuery } from "react-query";
import axios from "..";
export const useUpdateComptePatient = (config) => {
  return useMutation(
    ({
      id,
      nom,
      prenom,
      sexes,
      date_naissance,
      telephone,
      cin,
      email,
      password,
      // code_APCI,
      // parent,
    }) =>
      axios.post("/ucp", {
        id,
        nom,
        prenom,
        sexes,
        date_naissance,
        telephone,
        cin,
        email,
        password,
        // code_APCI,
        // parent,
      }),
    config
  );
};
