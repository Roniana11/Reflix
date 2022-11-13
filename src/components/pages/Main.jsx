import React, { Component } from "react";
import MoviesCatalog from "../movies/MoviesCatalog";
import UserInfo from "../users/UserInfo";
import { EMPTY_CATALOG_MESSAGE, EMPTY_RENT_MESSAGE } from "../../consts";

class Main extends Component {
  constructor() {
    super();
    this.state = {
      searchText: "",
    };
  }

  searchHandler = (e) => {
    this.setState({ searchText: e.target.value });
  };

  render() {
    const currentUser = this.props.user;
    const rentedMovies = this.props.movies.filter((m) =>
      currentUser.rents.includes(m.id)
    );
    const unrentedMovies = this.props.movies.filter(
      (m) =>
        !currentUser.rents.includes(m.id) &&
        m.title.toLowerCase().includes(this.state.searchText)
    );
    return (
      <div className="">
        <div className="user-info-container" >
          <UserInfo user={this.props.user}></UserInfo>
          <input className="search"
            type="text"
            placeholder="Search a movie..."
            value={this.state.searchText}
            onChange={this.searchHandler}
          ></input>
        </div>
        <MoviesCatalog
          movies={rentedMovies}
          header="RENTED"
          onAction={this.props.onReturn}
          action="Return"
          placeHolder={EMPTY_RENT_MESSAGE}
        ></MoviesCatalog>
        <MoviesCatalog
          movies={unrentedMovies}
          header="CATALOG"
          onAction={this.props.onRent}
          action="Rent"
          placeHolder={EMPTY_CATALOG_MESSAGE}
        ></MoviesCatalog>
      </div>
    );
  }
}

export default Main;
