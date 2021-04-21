import { useQuery, useMutation } from "react-query";
import axios from "./../";

export const useDomaine = ({ ...config } = {}) => {
  return useQuery(["domaine"], () => axios.get("dom"), config);
};
export const useSousDomaine = ({ params, ...config } = {}) => {
  return useMutation(
    ({ domaine_id }) => axios.post("sousdom", { domaine_id }),
    config
  );
};

export const useAddDomaine = (config) => {
  return useMutation(({ nom }) => axios.post("ad", { nom }), config);
};
export const useAddSousDomaine = (config) => {
  return useMutation(
    ({ nom, domaine_id }) => axios.post("asd", { nom, domaine_id }),
    config
  );
};
