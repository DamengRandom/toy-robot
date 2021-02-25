import React from "react";
import PropTypes from "prop-types";

export default function Footer({ id, classes, children }) {
  return <footer className={classes} data-testid={id}>{children}</footer>;
}

Footer.propTypes = {
  classes: PropTypes.string,
  children: PropTypes.node,
};
