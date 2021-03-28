import { useQuery } from "react-query";
import axios from "./../";

export const useListPatientDashboardAPI = ({ params, ...config } = {}) => {
  return useQuery(
    ["listpatientdashboard", params],
    () => axios.get("/listpatientdashboard", { params }),
    config
  );
};
