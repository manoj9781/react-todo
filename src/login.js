import React from "react";

export default class Login extends React.Component {
  render() {
    return (
      <div>
        <p>Login</p>
        <button onClick={this.props.login}>
          {!this.props.isLogged ? "Log In" : "Log Out"}
        </button>
      </div>
    );
  }
}
