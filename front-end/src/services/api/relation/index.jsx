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
    ["lrmp", params],
    () => axios.get("lrmp", { params }),
    config
  );
};
export const useRelationPM = ({ params, ...config } = {}) => {
  return useQuery(["pm", params], () => axios.get("pm", { params }), config);
};
