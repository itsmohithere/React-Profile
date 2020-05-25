import React from 'react';
import PropTypes from 'prop-types';

const Anchor = ({ children, ...rest }) => (
  <a {...rest}>
    { children }
  </a>
);

Anchor.propTypes = {
  children: PropTypes.string.isRequired,
};

export default Anchor;
