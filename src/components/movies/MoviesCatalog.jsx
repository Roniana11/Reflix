import React, { Component } from "react";
import Movies from "./Movies";

class MoviesCatalog extends Component {
  render() {
    return (
      <div className="calatog-container">
        <h1 >{this.props.header}</h1>
        {this.props.movies.length !== 0 ? (
          <Movies
            movies={this.props.movies}
            action={this.props.action}
            onAction={this.props.onAction}
          ></Movies>
        ) : (
          <p className="placeholder">{this.props.placeHolder}</p>
        )}
      </div>
    );
  }
}

export default MoviesCatalog;
