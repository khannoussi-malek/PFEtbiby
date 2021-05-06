import { useQuery, useMutation } from "react-query";
import axios from "./../";
export const useCreateActe = (config) => {
  return useMutation(
    ({ code, designation, price }) =>
      axios.post("add_act", { code, designation, price }),
    config
  );
};
export const useUpdateActe = (config) => {
  return useMutation(
    ({ code, designation, price, id }) =>
      axios.post("uact", { code, designation, price, id }),
    config
  );
};
export const useGetListActe = ({ params, ...config } = {}) => {
  return useQuery(["la", params], () => axios.get("la", { params }), config);
};
export const useGetAllListActe = ({ params, ...config } = {}) => {
  return useQuery(
    ["get acte (select2)", params],
    () => axios.get("gac", { params }),
    config
  );
};
export const useGetOnetActe = (config) => {
  return useMutation(({ id }) => axios.post("ga", { id }), config);
};
