import { data } from "../data";
import Navbar from "./Navbar";
import MovieCard from "./MovieCard";
import React from "react";
import { addMovies, setShowFavs } from "../actions";

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
    const { favourites } = this.props.store.getState();
    const index = favourites.indexOf(movie);

    if (index !== -1) return true; //movie found
    return false;
  };

  changeTab = (val) => {
    this.props.store.dispatch(setShowFavs(val));
  };

  render() {
    const { list, favourites, showFavs } = this.props.store.getState(); //{list:[],favourites:[]}
    console.log("state render", this.props.store.getState());
    const displayMovies = showFavs ? favourites : list;

    return (
      <div className="App">
        <Navbar />
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

export default App;
