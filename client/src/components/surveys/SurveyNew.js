import React, { Component } from "react";
import SurveyForm from "./SurveyForm";
import SurveyFormReview from "./SurveyFormReview";

export class SurveyNew extends Component {
  state = {
    showFormReview: false
  };
  render() {
    return (
      <div>
        {this.state.showFormReview ? (
          <SurveyFormReview
            onCancel={() => this.setState({ showFormReview: false })}
          />
        ) : (
          <SurveyForm
            onFormReview={() => this.setState({ showFormReview: true })}
          />
        )}
      </div>
    );
  }
}

export default SurveyNew;
