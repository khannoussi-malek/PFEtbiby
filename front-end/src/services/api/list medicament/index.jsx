import { useQuery, useMutation } from "react-query";
import axios from "./../";

export const useListMedicament = ({ params, ...config } = {}) => {
  return useQuery(["listem"], () => axios.get("listem", { params }), config);
};
export const useAddMedicament = (config) => {
  return useMutation(
    ({ designation }) => axios.post("addm", { designation }),
    config
  );
};
export const useGetListeMedicamentSelect2 = ({ params, ...config } = {}) => {
  return useQuery(
    "Liste Medicament (select2)",
    () => axios.get("lms2", { params }),
    config
  );
};
