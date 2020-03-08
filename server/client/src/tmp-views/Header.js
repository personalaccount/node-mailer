import React from "react";

class Header extends React.Component {
  render() {
    return (
        <nav>
            <div className="nav-wrapper">
                <div className="container">
                    <a href="#" className="left brand-logo">Logo</a>
                    <ul id="nav-mobile" className="right hide-on-med-and-down">
                        <li><a href="">Login with Google</a></li>
                    </ul>
                </div>
            </div>
        </nav>
    )
  }
}

export default Header;
