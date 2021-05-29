import { default as realAxios } from "axios";
import { Md5 } from "ts-md5/dist/md5";
import { QueryClient } from "react-query";

export const link = "http://192.168.137.1:8000/";
export const userImage = "/vendor/crudbooster/avatar.jpg";
const SECRET_KEY = "pfetbiby2020";
const timeStamps = Date.now();
const generatedToken = Md5.hashStr(
  SECRET_KEY + timeStamps + navigator.userAgent
).toString();
const queryClient = new QueryClient();
const axios = realAxios.create({
  baseURL: link + "/api/",
  headers: {
    // "Content-Type": "application/json",
    "X-Authorization-Time": timeStamps,
    "X-Authorization-Token": generatedToken,
  },
});
export default axios;
