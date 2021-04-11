import { useMutation } from "react-query";
import axios from "./../";
export const usePatientEntrer = (config) => {
  return useMutation(
    ({ id, etat }) =>
      axios.post("/pe", { id, etat: "Le patient consulte un médecin " }),
    config
  );
};
export const useSendPatientToWaitingRoom = (config) => {
  return useMutation(
    ({ id, etat }) => axios.post("/sptwr", { id, etat: "Le patient attend son rendez-vous" }),
    config
  );
};
