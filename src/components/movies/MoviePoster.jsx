import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./movies.css";

class MoviePoster extends Component {
  rentHandler = () => {
    this.props.onAction(this.props.id);
  };

  render() {
    return (
      <div className="movie-poster-container">
        <Link to={`/movies/${this.props.urlTitle}`}>
          <img src={this.props.img} alt={this.props.urlTitle}/>
        </Link>
        <button className={`button ${this.props.action}`} onClick={this.rentHandler}>{this.props.action}</button>
      </div>
    );
  }
}

export default MoviePoster;
