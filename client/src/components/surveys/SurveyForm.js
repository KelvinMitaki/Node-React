import React, { Component } from "react";
import { reduxForm, Field } from "redux-form";
import SurveyField from "./SurveyField";
import { Link } from "react-router-dom";

export class SurveyForm extends Component {
  render() {
    return (
      <div>
        <form onSubmit={this.props.handleSubmit(values => console.log(values))}>
          <Field
            component={SurveyField}
            type="text"
            name="title"
            label="Survey Title"
          />
          <Field
            component={SurveyField}
            type="text"
            name="subject"
            label="Subject Line"
          />
          <Field
            component={SurveyField}
            type="text"
            name="body"
            label="Email Body"
          />
          <Field
            component={SurveyField}
            type="text"
            name="emails"
            label="Recipient List"
          />
          <Link to="/surveys" className="red btn-flat left white-text">
            cancel
          </Link>
          <button type="submit" className="teal btn-flat right white-text">
            Next
            <i className="material-icons right">done</i>
          </button>
        </form>
      </div>
    );
  }
}

export default reduxForm({ form: "SurveyForm" })(SurveyForm);
