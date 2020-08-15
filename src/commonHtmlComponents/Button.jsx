import React from 'react';
import PropTypes from 'prop-types';

export default function Button({
  children, type, ...rest
}) {
  return (
    <button type="button" {...rest}>
      { children }
    </button>
  );
}

Button.defaultProps = {
  type: 'button',
};

Button.propTypes = {
  children: PropTypes.oneOfType([PropTypes.object, PropTypes.string]).isRequired,
  type: PropTypes.string,
};
