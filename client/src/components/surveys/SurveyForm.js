import React, { Component } from "react";
import { reduxForm, Field } from "redux-form";
import SurveyField from "./SurveyField";
import { Link } from "react-router-dom";
import validator from "validator";

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
            <i className="material-icons left">close</i>
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

const validate = values => {
  let errors = {};
  if (!values.body) {
    errors.body = "You must provide the body of the survey";
  }
  if (!values.subject) {
    errors.subject = "You must provide the subject of the survey";
  }
  if (!values.title) {
    errors.title = "You must provide the title of the survey";
  }
  if (!values.emails) {
    errors.emails = "You must provide the emails";
  }
  if (values.emails) {
    const isEmail = values.emails
      .split(",")
      .map(email => validator.isEmail(email));
    if (isEmail.includes(false)) {
      errors.emails = "Please enter a valid email";
    }
  }
  return errors;
};

export default reduxForm({ validate, form: "SurveyForm" })(SurveyForm);
