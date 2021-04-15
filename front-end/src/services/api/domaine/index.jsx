import { useQuery } from "react-query";
import axios from "./../";

export const useDomaine = ({ params, ...config } = {}) => {
  return useQuery(
    ["domaine", params],
    () => axios.get("/dom", { params }),
    config
  );
};
