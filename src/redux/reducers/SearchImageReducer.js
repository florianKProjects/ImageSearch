import { IMAGE_SEARCH_ACTIONS } from "./../actions/SearchImageAction";

const initialState = {
  loading: false,
  error: false,
  imageSearchWord: "",
  data: {
    page: 1,
    pages: 0,
    perpage: 0,
    total: 0,
    photo: [],
  },
};
export default (state = initialState, action) => {
  switch (action.type) {
    case IMAGE_SEARCH_ACTIONS.IMAGE_SEARCH:
      return {
        ...state,
        loading: true,
      };
    case IMAGE_SEARCH_ACTIONS.IMAGE_SEARCH_SUCCESS:
      debugger;
      if (action.payload.photos.page === 1) {
        return Object.assign({}, state, {
          loading: false,
          error: false,
          imageSearchWord: action.search,
          data: { ...action.payload.photos },
        });
      }
      let images = state.data.photo.concat(action.payload.photos.photo); // concatenate images results
      return Object.assign({}, state, {
        loading: false,
        error: false,
        imageSearchWord: action.search,
        data: { ...action.payload.photos, photo: images },
      });
    case IMAGE_SEARCH_ACTIONS.MOVIE_SEARCH_ERROR:
      return {
        ...state,
        loading: false,
        error: true,
      };
    case IMAGE_SEARCH_ACTIONS.IMAGE_SEARCH_RESET:
      return {
        ...initialState,
      };

    default:
      return state;
  }
};
