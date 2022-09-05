import React from "react";

const InputField = ({ fieldLabel, inputType, inputRef }) => {
  return (
    <>
      <div className="d-flex justify-between m-top-3">
        <label>{fieldLabel}</label>
        <input
          type={inputType}
          className="input-field"
          ref={inputRef}
          required
        />
      </div>
    </>
  );
};

export default InputField;
