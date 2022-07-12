import { BASE_IMAGES_API, _axios } from "./ConfigService";

const API_KEY = "15b67c2a8b4288ff1fddf5eb56655cfb";

export const imagesApiCallService = {
  _searchImages,
};

function _searchImages(seachWorkd, page) {
  const parmsConfig = [
    ["method", "flickr.photos.search"],
    ["safe_search", 1],
    ["format", "json"],
    ["nojsoncallback", 1],
    ["api_key", API_KEY],
    ["content_type", 1],
    ["is_getty", 1],
    ["page", page],
    ["text", seachWorkd],
    ["per_page", 10],
  ];
  const params = new URLSearchParams(parmsConfig);
  return _axios.get(BASE_IMAGES_API.seachImages, { params }).catch((error) => {
    return Promise.reject(error);
  });
}
