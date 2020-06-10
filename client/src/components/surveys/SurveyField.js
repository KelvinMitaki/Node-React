import React from "react";

const SurveyField = ({ input, label, meta }) => {
  return (
    <div>
      <label>
        <h5>
          <strong>{label}</strong>
        </h5>
      </label>
      <input type="text" {...input} />
      {meta.touched && meta.error}
    </div>
  );
};

export default SurveyField;
