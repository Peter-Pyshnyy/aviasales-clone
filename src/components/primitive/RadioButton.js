import React from "react";

const RadioButton = ({ label, value, onChange }) => {
  return (
    <div className="RBWrapp">
      <label className="RadioboxControll">
        <input type="radio" checked={value} onChange={onChange} />
        {label}
      </label>
    </div>
  );
};

export default RadioButton;
