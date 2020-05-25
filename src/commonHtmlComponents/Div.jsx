import React from 'react';
import PropTypes from 'prop-types';

const commonPropType = PropTypes.oneOfType([PropTypes.object, PropTypes.array]);

const Div = React.forwardRef(({ children, ...rest }, ref) => (
  <div ref={ref || null} {...rest}>
    { children }
  </div>
));

Div.propTypes = {
  children: commonPropType.isRequired,
};

export default Div;
