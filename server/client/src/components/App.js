import React from "react";
import Header from "../tmp-views/Header";
import Landing from "../tmp-views/Landing";
import Dashboard from "../tmp-views/Dashboard";

import { BrowserRouter, Route } from "react-router-dom";
import { connect } from "react-redux";
import * as actions from "../actions";

// Create App component
class App extends React.Component {
  componentDidMount() {
    this.props.fetchUser();
  }

  render() {
    return (
      <BrowserRouter>
        <Header />
        <Route exact path="/" component={Landing} />
        <Route exact path="/account" component={Dashboard} />
      </BrowserRouter>
    );
  }
}
export default connect(null, actions)(App);
