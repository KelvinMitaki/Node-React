import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

export class Dashboard extends Component {
  test = async () => {
    const res = await axios.get("/api/surveys/webhooks");
    console.log(res.data);
  };
  render() {
    return (
      <div>
        Dashboard
        <div className="fixed-action-btn">
          <Link
            onClick={this.test}
            to="/surveys/new"
            className="btn-floating btn-large red"
          >
            <i className="material-icons">add</i>
          </Link>
        </div>
      </div>
    );
  }
}

export default Dashboard;
