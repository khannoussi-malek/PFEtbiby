import { useQuery, useMutation } from "react-query";
import axios from "./../";

export const useNotification = ({ params, ...config } = {}) => {
  return useQuery(
    ["notification", params],
    () => axios.get("notification", { params }),
    config
  );
};
export const useRemoveNotification = ({ ...config } = {}) => {
  return useMutation(({ id }) => axios.post("rmnot", { id }), config);
};
