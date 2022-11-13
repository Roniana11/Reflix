import React, { Component } from "react";
import MoviePoster from "./MoviePoster";
import "./movies.css";

class Movies extends Component {
  render() {
    return (
      <div className="movies-container">
        {this.props.movies.map((movie) => (
          <MoviePoster
            onRent={this.props.onRent}
            id={movie.id}
            urlTitle={movie.title.replaceAll(" ", "-")}
            img={movie.img}
            action={this.props.action}
            onAction={this.props.onAction}
          ></MoviePoster>
        ))}
      </div>
    );
  }
}

export default Movies;
