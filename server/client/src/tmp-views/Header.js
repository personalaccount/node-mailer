import React from "react";

// Hook up the component to redux store
import { connect } from "react-redux";

class Header extends React.Component {
  renderContent() {
    switch (this.props.auth) {
      case null:
        return "Waiting for request to be resolved";
      case false:
        return "Logged out";
      default:
        return "Logged in";
    }
  }
  render() {
    return (
      <nav>
        <div className="nav-wrapper">
          <div className="container">
            <a href="/" className="left brand-logo">
              Logo
            </a>
            <ul id="nav-mobile" className="right hide-on-med-and-down">
                {this.renderContent()}
              {/*<li>*/}
              {/*  <a href="/auth/google">Login with Google</a>*/}
              {/*</li>*/}
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
