import { data } from "../data";
import Navbar from "./Navbar";
import MovieCard from "./MovieCard";
import React from "react";
import { addMovies, setShowFavs } from "../actions";
import { storeContext } from "../index";

class App extends React.Component {
  componentDidMount() {
    const { store } = this.props;
    store.subscribe(() => {
      this.forceUpdate();
    });

    // make api call
    store.dispatch(addMovies(data));

    console.log("state update1", this.props.store.getState());
  }

  isMovieFav = (movie) => {
    const { movies } = this.props.store.getState();
    const index = movies.favourites.indexOf(movie);

    if (index !== -1) return true; //movie found
    return false;
  };

  changeTab = (val) => {
    this.props.store.dispatch(setShowFavs(val));
  };

  render() {
    const { movies, search } = this.props.store.getState(); //{ movies : {} , search : {} }
    const { list, favourites, showFavs } = movies;
    console.log("state render", this.props.store.getState());
    const displayMovies = showFavs ? favourites : list;

    return (
      <div className="App">
        <Navbar search={search} />
        <div className="main">
          <div className="tabs">
            <div
              className={`tab ${showFavs ? "" : "active-tabs"}`}
              onClick={() => this.changeTab(false)}
            >
              Movies
            </div>
            <div
              className={`tab ${showFavs ? "active-tabs" : ""}`}
              onClick={() => this.changeTab(true)}
            >
              Favourites
            </div>
          </div>
          <div className="list">
            {displayMovies.map((movie, index) => {
              return (
                <MovieCard
                  movie={movie}
                  key={`movies-${index}`}
                  dispatch={this.props.store.dispatch}
                  isMovieFav={this.isMovieFav(movie)}
                />
              );
            })}
          </div>
          {displayMovies.length === 0 ? (
            <div className="no-movies">No Movies to Display</div>
          ) : null}
        </div>
      </div>
    );
  }
}

class AppWrapper extends React.Component {
  render() {
    return (
      <storeContext.Consumer>
        {(store) => <App store={store} />}
      </storeContext.Consumer>
    );
  }
}

export default AppWrapper;
