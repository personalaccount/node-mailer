import React from "react";
import Header from "../tmp-views/Header.js";
import Landing from "../tmp-views/Landing.js";
import Dashboard from "../tmp-views/Dashboard.js";

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
        <Route exact path="/user" component={Dashboard} />
        {/*<Route exact path="/candidates/new" component={CandidatesNew} />*/}
      </BrowserRouter>
    );
  }
}
export default connect(null, actions)(App);
