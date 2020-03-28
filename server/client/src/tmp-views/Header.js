import React from "react";

// Hook up the component to redux store
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import Billing from "../views/Billing";

class Header extends React.Component {
  renderContent() {
    switch (this.props.auth) {
      case null:
        return(
            <li>Loading...</li>
        );
      case false:
        return (
          <li>
            <a href="/auth/google">Login with Google</a>
          </li>
        );
      default:
        return [
          <li key="0">
            <Billing />
          </li>,
            <li key="2">
              Balance:
            </li>,
          <li key="1">
            <a href="/logout">Logout</a>
          </li>
        ];
    }
  }
  render() {
    return (
        <div className="container">
        <nav>
        <div className="nav-wrapper">
            <Link
              to={this.props.auth ? "/account" : "/"}
              className="left brand-logo"
            >
              {process.env.REACT_APP_APP_NAME}
            </Link>
            <ul id="nav-mobile" className="right hide-on-med-and-down">
              {this.renderContent()}
            </ul>
          </div>
      </nav>
        </div>
    );
  }
}

function mapStateToProps({ auth }) {
  return { auth: auth };
}

//setup the connect helper
export default connect(mapStateToProps)(Header);
