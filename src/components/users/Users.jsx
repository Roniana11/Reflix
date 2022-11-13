import React, { Component } from "react";
import UserAvatar from "./UserAvatar";
import "./users.css";

class Users extends Component {
  render() {
    return (
      <div className="users-container">
        {this.props.users.map((user) => (
          <UserAvatar
            setCurrentUser={this.props.setCurrentUser}
            name={user.name}
            id={user.id}
          ></UserAvatar>
        ))}
      </div>
    );
  }
}

export default Users;
