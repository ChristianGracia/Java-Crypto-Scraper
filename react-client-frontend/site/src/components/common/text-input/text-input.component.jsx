import React from "react";

const TextInput = ({ name, placeholder, value, type, onChange, disabled }) => {
  return (
    <div className="form-group">
      <input
        type={type}
        className="form-control form-control-lg"
        placeholder={placeholder}
        name={name}
        value={value}
        onChange={onChange}
        disabled={disabled}
      />
    </div>
  );
};

export default TextInput;
