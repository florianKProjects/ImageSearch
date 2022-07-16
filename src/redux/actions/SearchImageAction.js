import { imagesApiCallService } from "./../../services/SearchApiService";

export const IMAGE_SEARCH_ACTIONS = {
  IMAGE_SEARCH: "IMAGEE SEARCH",
  IMAGE_SEARCH_SUCCESS: "IMAGE SEARCH SUCCESS",
  MOVIE_SEARCH_ERROR: "IMAGE SEARCH ERROR",
  IMAGE_SEARCH_RESET: "IMAGE SEARCH RESET",
};

export const searchImages = (searchWorkd, page) => {
  return async (dispatch) => {
    dispatch({ type: request() });
    await imagesApiCallService._searchImages(searchWorkd, page).then(
      (data) => {
        dispatch(success(data, searchWorkd));
      },
      (error) => {
        dispatch(failure(error.toString()));
      }
    );
  };
  function request() {
    return IMAGE_SEARCH_ACTIONS.IMAGE_SEARCH;
  }
  function success(data, searchWorkd) {
    return {
      type: IMAGE_SEARCH_ACTIONS.IMAGE_SEARCH_SUCCESS,
      payload: data,
      search: searchWorkd,
    };
  }
  function failure(error) {
    return { type: IMAGE_SEARCH_ACTIONS.MOVIE_SEARCH_ERROR, error };
  }
};
export function resetState() {
  return { type: IMAGE_SEARCH_ACTIONS.IMAGE_SEARCH_RESET };
}
