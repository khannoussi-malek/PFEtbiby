import { useQuery } from "react-query";
import axios from "./../";

export const useConsultationPatient = ({ params, ...config } = {}) => {
  return useQuery(["cp", params], () => axios.get("/cp", { params }), config);
};
