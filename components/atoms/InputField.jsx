import React from "react";
import PropTypes from 'prop-types';

export default function InputField({
  label,
  id,
  name,
  type,
  value,
  classes,
  placeholder,
  handleChange,
  disabled
}) {
  return (
    <div className="flex-center__column">
      {label && <label>{label}</label>}
      <input
        id={id}
        data-testid={id}
        name={name}
        type={type}
        value={value}
        className={classes}
        placeholder={placeholder}
        onChange={handleChange}
        disabled={disabled}
      />
    </div>
  );
}

InputField.propTypes = {
  label: PropTypes.string,
  id: PropTypes.string,
  type: PropTypes.string,
  name: PropTypes.string,
  value: PropTypes.string,
  classes: PropTypes.string,
  placeholder: PropTypes.string,
  handleChange: PropTypes.func,
  disabled: PropTypes.array
};
