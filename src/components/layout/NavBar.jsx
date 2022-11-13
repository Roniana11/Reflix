import React, { Component } from "react";
import { Link } from "react-router-dom";
import UserInfo from "../users/UserInfo";
import "./layout.css";

class NavBar extends Component {
  render() {
    return (
      <nav>
        <div className="links-container">
          <Link className="link" to='/'>Home</Link>
          <Link className="link" to={`/${this.props.user}/movies`}>Movies</Link>
        </div>
        <div>
          <Link className="link logo" to='/'>REFLIX</Link>
        </div>
      </nav>
    );
  }
}

export default NavBar;
