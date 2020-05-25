import React from 'react';
import PropTypes from 'prop-types';
import { Div, Span } from '../../commonHtmlComponents';
import './progressBar.scss';

export default function ProgressBar({ width, className }) {
  return (
    <Div className={`meter ${className}`}>
      <Span style={{ width: `${width}` }}><Span /></Span>
    </Div>
  );
}

ProgressBar.defaultProps = {
  className: '',
};

ProgressBar.propTypes = {
  width: PropTypes.string.isRequired,
  className: PropTypes.string,
};
