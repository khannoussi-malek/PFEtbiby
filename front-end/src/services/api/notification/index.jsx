import { useQuery } from "react-query";
import axios from "./../";

export const useNotification = ({ params, ...config } = {}) => {
  return useQuery(
    ["notification", params],
    () => axios.get("notification", { params }),
    config
  );
};
