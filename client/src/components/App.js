import { BrowserRouter, Route } from "react-router-dom";
import React, { Component } from "react";
import { connect } from "react-redux";

import Header from "./Header";
import { fetchUser } from "../redux/actions";

export class App extends Component {
  componentDidMount() {
    this.props.fetchUser();
  }
  render() {
    return (
      <div>
        <BrowserRouter>
          <Header />
        </BrowserRouter>
      </div>
    );
  }
}

export default connect(null, { fetchUser })(App);
