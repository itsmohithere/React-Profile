import React from 'react';
import PropTypes from 'prop-types';

const Image = ({ alt, ...rest }) => (
  <img alt={alt} {...rest} />
);

Image.defaultProps = {
  alt: 'image',
};

Image.propTypes = {
  alt: PropTypes.string,
};

export default Image;
