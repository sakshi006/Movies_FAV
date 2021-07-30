// ACTION TYPES
export const ADD_MOVIES = "ADD_MOVIES";
export const ADD_FAVS = "ADD_FAVS";
export const REMOVE_FAVS = "REMOVE_FAVS";
export const SET_SHOW_FAVS = "SET_SHOW_FAVS";
// ACTION CREATORS
export function addMovies(movies) {
  return {
    type: "ADD_MOVIES",
    movies,
  };
}

export function addFavs(movie) {
  return {
    type: "ADD_FAVS",
    movie,
  };
}

export function removeFavs(movie) {
  return {
    type: "REMOVE_FAVS",
    movie,
  };
}
export function setShowFavs(val) {
  return {
    type: "SET_SHOW_FAVS",
    val,
  };
}
