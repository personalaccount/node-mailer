import React from "react";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";

import { connect } from "react-redux";
import * as actions from "../actions";

import Main from "../views/Main";
import Index from "../views/Index";
import Login from "../views/examples/Login";
import Landing from "../views/examples/Landing";
import Profile from "../views/examples/Profile";
import Register from "../views/examples/Register";

// Create App component
class App extends React.Component {
  componentDidMount() {
    this.props.fetchUser();
  }

  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route path="/" exact render={props => <Main {...props} />} />
          <Route path="/index" exact render={props => <Index {...props} />} />
          <Route
            path="/landing-page"
            exact
            render={props => <Landing {...props} />}
          />
          <Route path="/login" exact render={props => <Login {...props} />} />
          <Route
            path="/account"
            exact
            render={props => <Profile {...props} />}
          />
          <Route
            path="/register"
            exact
            render={props => <Register {...props} />}
          />
          <Redirect to="/" />
        </Switch>
      </BrowserRouter>
    );
  }
}
export default connect(null, actions)(App);
