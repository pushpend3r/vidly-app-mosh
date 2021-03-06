import React from "react";

const SelectInput = ({
  name,
  label,
  options,
  selectedOption,
  error,
  ...rest
}) => {
  return (
    <div className="mb-3">
      <label htmlFor={name} className="form-label">
        {label}
      </label>
      <select
        className="form-select"
        name={name}
        id={name}
        {...rest}
        value={selectedOption}
      >
        <option value=""></option>
        {options.map((o, i) => (
          <option key={i} value={o}>
            {o}
          </option>
        ))}
      </select>
      {error && <div className="alert alert-danger">{error}</div>}
    </div>
  );
};

export default SelectInput;
