import { useQuery } from "react-query";
import axios from "./../";

export const useConsultationPatient = ({ params, ...config } = {}) => {
  return useQuery(["cp", params], () => axios.get("cp", { params }), config);
};

export const useListOfThePatientInConsultation = ({
  params,
  ...config
} = {}) => {
  return useQuery(
    ["pdcm", params],
    () => axios.get("pdcm", { params }),
    config
  );
};
