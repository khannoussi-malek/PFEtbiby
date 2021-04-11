import { useMutation, useQuery } from "react-query";
import axios from "./../";
export const useAddCertificatType = (config) => {
  return useMutation(
    ({ type, structure }) => axios.post("/addct", { type, structure }),
    config
  );
};
export const useGetCertificat = ({ params, ...config } = {}) => {
  return useQuery(["gc", params], () => axios.get("/gc", { params }), config);
};
