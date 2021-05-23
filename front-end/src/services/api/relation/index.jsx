import { useMutation, useQuery } from "react-query";
import axios from "./../";
export const useRelation = (config) => {
  return useMutation(
    ({ medecin_id, patient_id }) =>
      axios.post("rmp", { medecin_id, patient_id }),
    config
  );
};
const list = () => {
  axios.get();
};
export const useRelationListe = ({ params, ...config } = {}) => {
  return useQuery(
    ["Liste de mes patients", params],
    () => axios.get("lrmp", { params }),
    config
  );
};
export const useRelationPM = ({ params, ...config } = {}) => {
  return useQuery("pm", () => axios.get("pm", { params }), config);
};
