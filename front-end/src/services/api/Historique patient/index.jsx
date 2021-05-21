import { useMutation, useQuery } from "react-query";
import axios from "./../";
export const useHistoriqueListConsultation = ({ params, ...config } = {}) => {
  return useQuery("hc", () => axios.get("hc", { params }), config);
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
  return useQuery("hex", () => axios.get("hex", { params }), config);
};

export const useHistoriqueListOrdonnance = ({ params, ...config } = {}) => {
  return useQuery("hor", () => axios.get("hor", { params }), config);
};

export const useHistoriqueListLettre = ({ params, ...config } = {}) => {
  return useQuery("hl", () => axios.get("hl", { params }), config);
};
