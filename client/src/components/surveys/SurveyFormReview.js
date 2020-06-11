import React from "react";
import { connect } from "react-redux";
import { sendSurvey } from "../../redux/actions";
import { withRouter } from "react-router-dom";

const SurveyFormReview = ({ onCancel, formValues, sendSurvey, history }) => {
  const handleClick = async values => {
    await sendSurvey(values, history);
  };
  return (
    <div>
      <h4>please review your entries</h4>
      <div>
        <label>
          <h5>Survey Title</h5>
        </label>
        <h6>{formValues.title}</h6>
        <br />
        <label>
          <h5>Subject Line</h5>
        </label>
        <h6>{formValues.subject}</h6>
        <br />
        <label>
          <h5>Email Body</h5>
        </label>
        <h6>{formValues.body}</h6>
        <br />
        <label>
          <h5>Recipient List</h5>
        </label>
        <h6>{formValues.emails}</h6>
        <br />
      </div>
      <button
        onClick={onCancel}
        className="yellow darken-3 btn-flat white-text"
      >
        back
      </button>
      <button
        className="teal btn-flat  right white-text"
        onClick={() => handleClick(formValues)}
      >
        send survey
        <i className="material-icons right">send</i>
      </button>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    formValues: state.form.SurveyForm.values
  };
};

export default withRouter(
  connect(mapStateToProps, { sendSurvey })(SurveyFormReview)
);
