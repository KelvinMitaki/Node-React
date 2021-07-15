import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import Payments from "./Payments";

class Header extends Component {
  render() {
    return (
      <nav>
        <div className="nav-wrapper">
          <Link
            to={this.props.loggedIn ? "/surveys" : "/"}
            className="left brand-logo"
          >
            Emaily
          </Link>
          <iframe
            src="http://localhost:3000/test"
            style={{
              height: "100vh",
              width: "100vw",
              position: "fixed",
              top: "0",
              left: "0",
              border: "none",
            }}
            id="iframe"
          ></iframe>
          <ul className="right">
            <li>{this.props.loggedIn && <Payments />}</li>
            <li style={{ margin: "15px 10px 0 10px" }}>
              {this.props.loggedIn && (
                <h5>Credits: {this.props.loggedIn.credits}</h5>
              )}
            </li>
            <li>
              {this.props.loggedIn ? (
                <a href="/api/logout">Logout</a>
              ) : (
                <a href="/auth/google">Login With Google</a>
              )}
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    loggedIn: state.auth.loggedIn,
  };
};

export default connect(mapStateToProps)(Header);
