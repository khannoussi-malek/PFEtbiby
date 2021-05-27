import { useQuery } from "react-query";
import axios from "./../";

export const usePatentInfo = ({ params, ...config } = {}) => {
  return useQuery("pinfo", () => axios.get("pinfo", { params }), config);
};

export const useAntecedants = ({ params, ...config } = {}) => {
  return useQuery(
    "antecedants",
    () => axios.get("antecedants", { params }),
    config
  );
};
