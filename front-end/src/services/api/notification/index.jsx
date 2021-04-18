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
export const useRemoveAllNotification = ({ ...config } = {}) => {
  return useMutation(({ id }) => axios.post("rmanotif", { id }), config);
};
export const useSeeNotification = ({ ...config } = {}) => {
  return useMutation(({ id }) => axios.post("vnotif", { id }), config);
};
