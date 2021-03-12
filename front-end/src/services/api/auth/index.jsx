import { useQueryCache, useMutation } from "react-query";
import axios from "./../";
export const useLogin = (config) => {
  // const queryCache = useQueryCache();
  // const { updateStorage } = useStorage(USER_STORAGE);
  return useMutation(
    ({ user, password }) => axios.post("/login", { user, password }),
    config
    // {
    //   ...config,
    //   onSuccess: async (response, ...args) => {
    //     queryCache.clear();
    //     // await updateStorage(response.data);
    //     // if (config.onSuccess) {
    //     //   config.onSuccess(response, ...args);
    //     // }
    //   },
    // }
  );
};
