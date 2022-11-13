import React, { Component } from "react";

class UserInfo extends Component {
  render() {
    return (
      <div className="user-info">
        <h3 > Hello {this.props.user.name}, your budget is {this.props.user.budget}$</h3>
      </div>
    );
  }
}

export default UserInfo;
