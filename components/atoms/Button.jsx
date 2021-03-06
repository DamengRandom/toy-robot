import React from "react";
import PropTypes from "prop-types";

export default function Button({ id, type, children, classes, clickEvent, isDisabled }) {
  return (
    <button
      id={id}
      data-testid={id}
      type={type}
      className={classes}
      onClick={clickEvent}
      disabled={isDisabled}
    >
      {children}
    </button>
  );
}

Button.propTypes = {
  id: PropTypes.string,
  type: PropTypes.string,
  classes: PropTypes.string,
  clickEvent: PropTypes.func,
  children: PropTypes.node,
};
