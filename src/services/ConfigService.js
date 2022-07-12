import axios from "axios";

axios.interceptors.response.use(
  function (response) {
    return response.data;
  },
  function (error) {
    return Promise.reject(error);
  }
);
axios.interceptors.request.use(function (config) {
  return config;
});
const BASE_API = "https://api.flickr.com/services/rest/";

export const _axios = axios;

export const BASE_IMAGES_API = {
  seachImages: `${BASE_API}`,
};
