import React from 'react';
import PropTypes from 'prop-types';

const commonPropType = PropTypes.oneOfType([PropTypes.object, PropTypes.array, PropTypes.string]);

const Div = React.forwardRef(({ children, ...rest }, ref) => (
  <div ref={ref || null} {...rest}>
    { children }
  </div>
));

Div.defaultProps = {
  children: '',
};

Div.propTypes = {
  children: commonPropType,
};

export default Div;
