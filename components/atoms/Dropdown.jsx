import React from "react";
import PropTypes from "prop-types";
export default function Dropdown({ id, classes, handleChange, children, isDisabled }) {
  return (
    <select
      id={id}
      data-testid={id}
      className={classes}
      onChange={handleChange}
      disabled={isDisabled}
    >
      {children}
    </select>
  );
}

Dropdown.propTypes = {
  id: PropTypes.string,
  classes: PropTypes.string,
  handleChange: PropTypes.func,
  children: PropTypes.node,
};
