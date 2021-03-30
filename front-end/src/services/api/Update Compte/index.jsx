import { useMutation, useQuery } from "react-query";
import axios from "..";
export const useUpdateComptePatient = (config) => {
  return useMutation(
    ({
      id,
      code_APCI,
      date_naissance,
      email,
      nom,
      parent,
      password,
      prenom,
      telephone,
    }) =>
      axios.post("/ucp", {
        id,
        code_APCI,
        date_naissance,
        email,
        nom,
        parent,
        password,
        prenom,
        telephone,
      }),
    config
  );
};
