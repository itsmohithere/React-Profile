import React from 'react';
import PropTypes from 'prop-types';

const Paragraph = ({ children, ...rest }) => <p {...rest}>{ children }</p>;

Paragraph.propTypes = {
  children: PropTypes.string.isRequired,
};

export default Paragraph;
