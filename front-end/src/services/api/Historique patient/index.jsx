import { useMutation, useQuery } from "react-query";
import axios from "./../";
export const useHistoriqueListConsultation = ({ params, ...config } = {}) => {
  return useQuery(["hc", params], () => axios.get("hc", { params }), config);
};

export const useHistoriqueListCertificat = ({ params, ...config } = {}) => {
  return useQuery(
    ["hcertif", params],
    () => axios.get("hcertif", { params }),
    config
  );
};

export const useHistoriqueListActe = ({ params, ...config } = {}) => {
  return useQuery(
    ["hact", params],
    () => axios.get("hact", { params }),
    config
  );
};

export const useHistoriqueListAntecedants = ({ params, ...config } = {}) => {
  return useQuery(
    ["hant", params],
    () => axios.get("hant", { params }),
    config
  );
};

export const useHistoriqueListExamen = ({ params, ...config } = {}) => {
  return useQuery(["hex", params], () => axios.get("hex", { params }), config);
};

export const useHistoriqueListOrdonnance = ({ params, ...config } = {}) => {
  return useQuery(["hor", params], () => axios.get("hor", { params }), config);
};

export const useHistoriqueListLettre = ({ params, ...config } = {}) => {
  return useQuery(["hl", params], () => axios.get("hl", { params }), config);
};
