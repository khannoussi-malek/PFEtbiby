import { useQuery } from "react-query";
import axios from "./../";

export const useGestionDeCompte = ({ params, ...config } = {}) => {
  return useQuery(["gcf", params], () => axios.get("gcf", { params }), config);
};
