import { useMutation, useQuery } from "react-query";
import axiosImage from "..";
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
      image,
      // code_APCI,
      // parent,
    }) =>
      axiosImage.post("/ucp", {
        id,
        nom,
        prenom,
        sexes,
        date_naissance,
        telephone,
        cin,
        email,
        password,
        image,
        // code_APCI,
        // parent,
      }),
    config
  );
};
