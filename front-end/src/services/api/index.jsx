import { default as realAxios } from "axios";
import { Md5 } from "ts-md5/dist/md5";

export const link = "http://127.0.0.1:8000/";
export const userImage = "vendor/crudbooster/avatar.jpg";
const SECRET_KEY = "pfetbiby2020";
const timeStamps = Date.now();
const generatedToken = Md5.hashStr(
  SECRET_KEY + timeStamps + navigator.userAgent
).toString();

const axios = realAxios.create({
  baseURL: link + "api/",
  headers: {
    // "Content-Type": "multipart/form-data",
    "X-Authorization-Time": timeStamps,
    "X-Authorization-Token": generatedToken,
  },
});
export default axios;
