import React from 'react';
import { FaTwitter } from 'react-icons/fa';
import PropType from 'prop-types';

export default function TwitterIcon({ size }) {
  return <FaTwitter className="gridIcon" color="#00acee" size={size} />;
}

TwitterIcon.defaultProps = {
  size: '1em',
};

TwitterIcon.propTypes = {
  size: PropType.string,
};
