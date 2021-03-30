import { useMutation, useQuery } from "react-query";
import axios from "./../";

export const usePatentInfo = ({ params, ...config } = {}) => {
  return useQuery(
    ["pinfo", params],
    () => axios.get("/pinfo", { params }),
    config
  );
};
