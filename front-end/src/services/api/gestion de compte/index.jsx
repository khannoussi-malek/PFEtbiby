import { useQuery } from "react-query";
import axios from "./../";

export const useGestionDeCompte = ({ params, ...config } = {}) => {
  return useQuery("gcf", () => axios.get("gcf", { params }), config);
};
