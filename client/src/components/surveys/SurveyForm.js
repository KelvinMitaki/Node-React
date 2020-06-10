import React, { Component } from "react";
import { reduxForm, Field } from "redux-form";
import SurveyField from "./SurveyField";

export class SurveyForm extends Component {
  render() {
    return (
      <div>
        <form onSubmit={this.props.handleSubmit(values => console.log(values))}>
          <Field component={SurveyField} type="text" name="title" />
        </form>
      </div>
    );
  }
}

export default reduxForm({ form: "SurveyForm" })(SurveyForm);
