import React from 'react';
import { FaNpm } from 'react-icons/fa';
import PropType from 'prop-types';

export default function NPMIcon({ size }) {
  return <FaNpm className="gridIcon" color="#CC3534" size={size} />;
}

NPMIcon.defaultProps = {
  size: '1em',
};

NPMIcon.propTypes = {
  size: PropType.string,
};
