import React from "react";
import { addFavs, removeFavs } from "../actions";

class MovieCard extends React.Component {
  handleFav = () => {
    const { movie } = this.props;
    this.props.dispatch(addFavs(movie));
  };
  handleUnFav = () => {
    const { movie } = this.props;
    this.props.dispatch(removeFavs(movie));
  };

  render() {
    const { movie, isMovieFav } = this.props;
    return (
      <div className="movie-card">
        <div className="left">
          <img alt="movie-poster" src={movie.Poster} />
        </div>
        <div className="right">
          <div className="title">{movie.Title}</div>
          <div className="plot">{movie.Plot}</div>
          <div className="footer">
            <div className="rating">{movie.imdbRating}</div>
            {isMovieFav ? (
              <button onClick={this.handleUnFav} className="unfavourite-btn">
                UnFavourite
              </button>
            ) : (
              <button onClick={this.handleFav} className="favourite-btn">
                Favourite
              </button>
            )}
          </div>
        </div>
      </div>
    );
  }
}
export default MovieCard;
