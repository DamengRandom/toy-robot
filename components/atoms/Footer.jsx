import React from "react";
import PropTypes from "prop-types";

export default function Footer({ classes, children }) {
  return <footer className={classes}>{children}</footer>;
}

Footer.propTypes = {
  classes: PropTypes.string,
  children: PropTypes.node,
};
