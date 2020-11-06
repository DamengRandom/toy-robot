import React from 'react';
import PropTypes from 'prop-types';

export default function Dropdown({ id, classes, handleChange, children }) {
  return (
    <select
      id={id}
      data-testid={id}
      className={classes}
      onChange={handleChange}
    >
      {children}
    </select>
  );
};

Dropdown.propTypes = {
  id: PropTypes.string,
  classes: PropTypes.string,
  handleChange: PropTypes.func,
  children: PropTypes.node
};
