import React from 'react';
import PropTypes from 'prop-types';

export const ListLi = ({ children, ...rest }) => <li {...rest}>{ children }</li>;

ListLi.propTypes = {
  children: PropTypes.oneOfType([PropTypes.object, PropTypes.string]).isRequired,
};

export const ListUl = ({ children, ...rest }) => (
  <ul {...rest}>{ children }</ul>
);

ListUl.propTypes = {
  children: PropTypes.oneOfType([PropTypes.object, PropTypes.string]).isRequired,
};
