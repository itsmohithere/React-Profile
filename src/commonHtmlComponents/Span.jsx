import React from 'react';
import PropTypes from 'prop-types';

const Span = ({ children, ...rest }) => (
  <span {...rest}>
    { children }
  </span>
);

Span.propTypes = {
  children: PropTypes.oneOfType([PropTypes.string, PropTypes.object, PropTypes.array]).isRequired,
};

export default Span;
