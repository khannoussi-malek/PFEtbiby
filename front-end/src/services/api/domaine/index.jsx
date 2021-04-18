import { useQuery } from "react-query";
import axios from "./../";

export const useDomaine = ({ ...config } = {}) => {
  return useQuery(["domaine"], () => axios.get("dom"), config);
};
