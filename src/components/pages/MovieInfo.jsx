import React, { Component } from "react";
import "./pages.css";

class MovieInfo extends Component {
  render() {
    const movietitle = this.props.match.params.movie.replaceAll("-", " ");
    const movie = this.props.movies.find((m) => m.title === movietitle);
    return (
      <div className="movie-info-container page">
        <div className="movie-info">
          <h4>Reflix</h4>
          <h1>{movietitle}</h1>
          <div className="buttons-container">
            <button className="button">Play</button>
            <button className="button">Add to favorites</button>
          </div>
          <p>{movie.descrShort}</p>
        </div>
        <div className="movie-img">
        <img src={movie.img} alt={movie.title}></img>
        </div>
      </div>
    );
  }
}

export default MovieInfo;
