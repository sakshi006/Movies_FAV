import { ADD_MOVIES, ADD_FAVS, REMOVE_FAVS, SET_SHOW_FAVS } from "../actions";

const initialMovieState = {
  list: [],
  favourites: [],
  showFavs: false,
};

export default function movies(state = initialMovieState, action) {
  switch (action.type) {
    case ADD_MOVIES:
      return {
        ...state,
        list: action.movies,
      };
    case ADD_FAVS:
      return {
        ...state,
        favourites: [action.movie, ...state.favourites],
      };
    case REMOVE_FAVS:
      const filteredMovie = state.favourites.filter(
        (movie) => movie.Title !== action.movie.Title
      );
      return {
        ...state,
        favourites: filteredMovie,
      };

    case SET_SHOW_FAVS:
      return {
        ...state,
        showFavs: action.val,
      };
    default:
      return state;
  }
}
