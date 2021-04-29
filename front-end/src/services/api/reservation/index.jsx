import { useMutation, useQuery } from "react-query";
import axios from "..";
export const useCreateReservation = (config) => {
  return useMutation(
    ({ medecin_id, patient_id, etat, date_reservation }) =>
      axios.post("cr", { medecin_id, patient_id, etat, date_reservation }),
    config
  );
};
export const useUpdateReservation = (config) => {
  return useMutation(
    ({ id, date_reservation }) =>
      axios.post("updater", {
        id,
        date_reservation,
      }),
    config
  );
};
export const useDeleteReservation = (config) => {
  return useMutation(({ id }) => axios.post("deleter", { id }), config);
};
export const useReservationMListe = ({ params, ...config } = {}) => {
  return useQuery(
    ["list de rendeves des parents en dashboard", params],
    () => axios.get("listrm", { params }),
    config
  );
};
export const useListReservation = ({ params, ...config } = {}) => {
  return useQuery(
    ["list de réservation on dashboard", params],
    () => axios.get("lrd", { params }),
    config
  );
};
