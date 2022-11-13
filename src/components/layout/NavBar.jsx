import React, { Component } from "react";
import { Link } from "react-router-dom";
import UserInfo from "../users/UserInfo";
import "./layout.css";

class NavBar extends Component {
  logoutHandler =()=>{
    this.props.logoutUser()
  }

  render() {
    return (
      <nav>
        <div className="links-container">
          <Link onClick={this.logoutHandler} className="link" to='/'>Home</Link>
          {this.props.user && <Link className="link" to={`/${this.props.user.name}/movies`}>Movies</Link>}
        </div>
        <div>
          <Link className="link logo" to='/'>REFLIX</Link>
        </div>
      </nav>
    );
  }
}

export default NavBar;
