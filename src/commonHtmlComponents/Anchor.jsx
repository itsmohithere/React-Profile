import React from 'react';
import PropTypes from 'prop-types';

const Anchor = ({ children, ...rest }) => (
  <a {...rest}>
    { children }
  </a>
);

Anchor.propTypes = {
  children: PropTypes.oneOfType([PropTypes.object, PropTypes.string]).isRequired,
};

export default Anchor;
