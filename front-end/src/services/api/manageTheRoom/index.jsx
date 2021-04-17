import { useMutation } from "react-query";
import axios from "./../";
export const usePatientEntrer = (config) => {
  return useMutation(
    ({ id, etat }) =>
      axios.post("/pe", { id, etat: "patient avec le médecin" }),
    config
  );
};
export const useSendPatientToWaitingRoom = (config) => {
  return useMutation(
    ({ id, etat }) => axios.post("/sptwr", { id, etat: "en attente" }),
    config
  );
};
