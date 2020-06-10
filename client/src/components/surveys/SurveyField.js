import React from "react";

const SurveyField = ({ input, label }) => {
  return (
    <div>
      <label>
        <h5>
          <strong>{label}</strong>
        </h5>
      </label>
      <input type="text" {...input} />
    </div>
  );
};

export default SurveyField;
