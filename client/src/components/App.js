import { BrowserRouter, Route } from "react-router-dom";
import React, { Component } from "react";
import { connect } from "react-redux";

import Header from "./Header";
import { fetchUser } from "../redux/actions";
import "./App.css";
import Dashboard from "./Dashboard";
import Landing from "./Landing";
import SurveyNew from "./surveys/SurveyNew";

export class App extends Component {
  componentDidMount() {
    this.props.fetchUser();
  }
  render() {
    if (this.props.loading) {
      return (
        <div className="ui segment whole">
          <div className="ui active dimmer">
            <div className="ui text loader">Loading</div>
          </div>
        </div>
      );
    }
    return (
      <div>
        <BrowserRouter>
          <Header />
          <div className="container">
            <Route path="/" exact component={Landing} />
            <Route path="/surveys" exact component={Dashboard} />
            <Route path="/surveys/new" component={SurveyNew} />
          </div>
        </BrowserRouter>
      </div>
    );
  }
}
const mapStateToProps = state => {
  return {
    loading: state.auth.loading
  };
};

export default connect(mapStateToProps, { fetchUser })(App);
