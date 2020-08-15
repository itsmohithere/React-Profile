import React from 'react';
import PropTypes from 'prop-types';
import { Div } from '../../commonHtmlComponents';
import './card.scss';

export default function Card({ children, className }) {
  return (
    <Div className={`card ${className}`}>{ children }</Div>
  );
}

Card.defaultProps = {
  className: '',
};

Card.propTypes = {
  children: PropTypes.oneOfType([PropTypes.string, PropTypes.array, PropTypes.object]).isRequired,
  className: PropTypes.string,
};
