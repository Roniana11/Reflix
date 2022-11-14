import React, { Component } from "react";
import { BrowserRouter as Routes, Route } from "react-router-dom";
import "./App.css";
import { getMovies,getUsers } from "./utils";
import NavBar from "./components/layout/NavBar";
import Home from "./components/pages/Home";
import MovieInfo from "./components/pages/MovieInfo";
import Main from "./components/pages/Main";
import {MOVIE_PRICE,STARTING_BUDGET,HAVE_MOVIE_MESSAGE,DONT_HAVE_MOVIE_MESSAGE,LIMIT,OUT_OF_MONEY_MESSAGE} from "./consts";

class App extends Component {
  constructor() {
    super();
    this.state = {
      movies: getMovies(),
      users: getUsers(),
      currentUser: null,
    };
  }

  setCurrentUser = (id) =>{
    const currentUser = this.state.users.find(u => u.id === id);
    this.setState({currentUser: {...currentUser}});
  }
  
  getCurrentUser = () => {
    const usersCopy = [...this.state.users];
    const currentUserCopy = usersCopy.find(u => u.id === this.state.currentUser.id);
    return [currentUserCopy, usersCopy];
  };

  rentMovie = (id) => {
    const [user, users] = this.getCurrentUser();
    if (user.rents.indexOf(id) !== -1) {
      alert(HAVE_MOVIE_MESSAGE);
    } else {
      if(user.budget > LIMIT){
      user.rents.push(id);
      user.budget -= MOVIE_PRICE;
      this.setState({ currentUser: user, users: users });
      }else{
        alert(OUT_OF_MONEY_MESSAGE)
      }
    }
  };

  returnMovie = (id) => {
   const  [user, users] = this.getCurrentUser();
    if (user.rents.indexOf(id) === -1) {
      alert(DONT_HAVE_MOVIE_MESSAGE);
    } else {
      user.rents = user.rents.filter((m) => m !== id);
      user.budget += MOVIE_PRICE;
      this.setState({ currentUser: user, users: users });
    }
  };

  logoutUser = ()=>{
    this.setState({currentUser:null})
  }

  render() {
    return (
      <Routes>
        <div className="App">
          <NavBar user={this.state.currentUser} logoutUser={this.logoutUser}></NavBar>
          <Route
            path="/"
            exact
            render={() => <Home users={this.state.users} setCurrentUser={this.setCurrentUser} />}
          />
          <Route
            path="/:userId/movies"
            exact
            render={() => (
              <Main user={this.state.currentUser} onRent={this.rentMovie} onReturn={this.returnMovie} movies={this.state.movies} />
            )}
          />
          <Route
            path="/movies/:movie"
            exact
            render={({ match }) => (
              <MovieInfo match={match} movies={this.state.movies} />
            )}
          />
        </div>
      </Routes>
    );
  }
}
export default App;
