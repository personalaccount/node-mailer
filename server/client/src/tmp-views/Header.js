import React from "react";

// Hook up the component to redux store
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import Billing from "../views/Billing";

class Header extends React.Component {
  renderContent() {
    switch (this.props.auth) {
      case null:
        return;
      case false:
        return (
          <li>
            <a href="/auth/google">Login with Google</a>
          </li>
        );
      default:
        return [
          <li>
            <Billing />
          </li>,
          <li>
            <a href="/logout">Logout</a>
          </li>
        ];
    }
  }
  render() {
    return (
      <nav>
        <div className="nav-wrapper">
          <div className="container">
            <Link
              to={this.props.auth ? "/account" : "/"}
              className="left brand-logo"
            >
              Recruforce
            </Link>
            <ul id="nav-mobile" className="right hide-on-med-and-down">
              {this.renderContent()}
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}

function mapStateToProps({ auth }) {
  return { auth: auth };
}

//setup the connect helper
export default connect(mapStateToProps)(Header);
