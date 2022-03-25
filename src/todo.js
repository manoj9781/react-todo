import React from "react";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import PrivateRoute from "react-private-route";

import Login from "./login";
import Home from './home';

class Todo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoggedIn: false
    };
    this.isLoggedIn = this.isLoggedIn.bind(this);
    this.login = this.login.bind(this);
  }
  isLoggedIn() {
    return this.state.isLoggedIn;
  }
  login() {
    this.setState({ isLoggedIn: !this.state.isLoggedIn });
  }
  render() {
    return (
      <Router>
        <div className={"main-container"}>
          <div>{this.isLoggedIn() ? "Logged in" : "Not Logged in"}</div>
          <div>
            <ul>
              <li>
                <Link to="/home">Home</Link>
              </li>
              <li>
                <Link to="/login">Login</Link>
              </li>
            </ul>
          </div>
          <Switch>
            <Route
              path="/login"
              component={() => (
                <Login login={this.login} isLogged={this.state.isLoggedIn} />
              )}
            />
            <PrivateRoute
              exact
              path="/home"
              component={Home}
              isAuthenticated={!!this.isLoggedIn()}
              redirect="/login"
            />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default Todo;
