import React, { Component } from "react";
import "./pages.css";
import Users from "../users/Users";

class Home extends Component {
  render() {
    return (
      <div className="page">
        <h1 className="title">WHO'S WATCHING REFLIX?</h1>
        <Users users={this.props.users} setCurrentUser={this.props.setCurrentUser}></Users>
      </div>
    );
  }
}

export default Home;
