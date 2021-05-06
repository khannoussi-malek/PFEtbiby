import { useQuery, useMutation } from "react-query";
import axios from "./../";
export const useCreateActe = (props, config) => {
  return useMutation((props) => axios.post("add_act", props), config);
};
export const useGetListActe = ({ params, ...config } = {}) => {
  return useQuery(["la", params], () => axios.get("la", { params }), config);
};
