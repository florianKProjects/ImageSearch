import { IMAGE_SEARCH_ACTIONS } from "./../actions/SearchImageAction";

const initialState = {
  loading: false,
  error: false,
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
      let images = state.data.photo.concat(action.payload.photos.photo); // concatenate images results
      return Object.assign({}, state, {
        loading: false,
        error: false,
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
