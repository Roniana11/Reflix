import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./users.css";
class UserAvatar extends Component {
  setUser = () =>{
    this.props.setCurrentUser(this.props.id)
  }
  
    render() {
    return (
      <Link className={`link user-avatar user-${this.props.id}`} onClick={this.setUser} to={`/${this.props.id}/movies`}>
        <div className="">
          <h1>{this.props.name}</h1>
        </div>
      </Link>
    );
  }
}

export default UserAvatar;
