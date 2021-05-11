import { useMutation, useQuery } from "react-query";
import axios from "./../";
export const useFindeDoctor = ({ params, ...config } = {}) => {
  return useQuery(
    ["Trouver un medecin", params],
    () => axios.get("tm", { params }),
    config
  );
};
