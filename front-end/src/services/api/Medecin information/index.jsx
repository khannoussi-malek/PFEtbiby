import { useQuery } from "react-query";
import axios from "./../";

export const useMedecinInfo = ({ params, ...config } = {}) => {
  return useQuery(
    ["medecininfo", params],
    () => axios.get("medecininfo", { params }),
    config
  );
};

export const useListeMedec = ({ params, ...config } = {}) => {
  return useQuery("liste medecin", () => axios.get("lm"), config);
};
