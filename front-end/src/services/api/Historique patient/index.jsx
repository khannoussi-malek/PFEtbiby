import { useMutation, useQuery } from "react-query";
import axios from "./../";
export const useHistoriqueListConsultation = (params, config) => {
  return useQuery(["hc", params], () => axios.get("hc", { params }), config);
};
