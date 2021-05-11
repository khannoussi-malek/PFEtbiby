import { useMutation, useQuery } from "react-query";
import axios from "..";
import { link } from "./../index";
const headers = {
  // "Content-type": "multipart/form-data",
};
export const useUpdateComptePatient = (config) => {
  return useMutation((params) => {
    return axios({
      method: "POST",
      url: link + "/api/ucp",
      data: params,
      // headers: { ...params.photo.getHeaders() },
    });
  }, config);
};
export const useRemovePhoto = (params, ...config) => {
  return useMutation((params) => axios.post("rmpp", params), config);
};
