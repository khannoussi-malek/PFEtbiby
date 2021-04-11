import { useQuery } from "react-query";
import axios from "./../";

export const useMedecinInfo = ({ params, ...config } = {}) => {
  return useQuery(
    ["medecininfo", params],
    () => axios.get("/medecininfo", { params }),
    config
  );
};
