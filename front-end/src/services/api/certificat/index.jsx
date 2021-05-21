import { useMutation, useQuery } from "react-query";
import axios from "./../";
export const useAddCertificatType = (config) => {
  return useMutation(
    ({ type, structure, cms_users_id }) =>
      axios.post("addct", { type, structure, cms_users_id }),
    config
  );
};
export const useUpdateCertificatType = (config) => {
  return useMutation(
    ({ type, structure, cms_users_id, id }) =>
      axios.post("uct", { type, structure, cms_users_id, id }),
    config
  );
};
export const useGetCertificat = ({ params, ...config } = {}) => {
  return useQuery("gc", () => axios.get("gc", { params }), config);
};

export const useGetListCertificat = ({ params, ...config } = {}) => {
  return useQuery("ltc", () => axios.get("ltc", { params }), config);
};
