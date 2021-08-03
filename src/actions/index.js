// ACTION TYPES
export const ADD_MOVIES = "ADD_MOVIES";
export const ADD_FAVS = "ADD_FAVS";
export const REMOVE_FAVS = "REMOVE_FAVS";
export const SET_SHOW_FAVS = "SET_SHOW_FAVS";
export const ADD_MOVIE_TO_LIST = "ADD_MOVIE_TO_LIST";
export const ADD_SEARCH_RESULT = "ADD_SEARCH_RESULT";
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

export function addMovieToList(movie) {
  return {
    type: ADD_MOVIE_TO_LIST,
    movie,
  };
}

export function handleMovieSearch(searchText) {
  const url = `https://www.omdbapi.com/?apikey=e458a4f3&t=${searchText}`;

  return function (dispatch) {
    fetch(url)
      .then((response) => response.json())
      .then((movie) => {
        // console.log("movie", movie);

        // dispatch an action
        dispatch(addMovieSearchResult(movie));
      });
  };
}

export function addMovieSearchResult(movie) {
  return {
    type: ADD_SEARCH_RESULT,
    movie,
  };
}
