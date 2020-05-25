import React from 'react';
import { FaLinkedin } from 'react-icons/fa';
import PropType from 'prop-types';

export default function LinkedInIcon({ size }) {
  return <FaLinkedin className="gridIcon" color="#0e76a8" size={size} />;
}

LinkedInIcon.defaultProps = {
  size: '1em',
};

LinkedInIcon.propTypes = {
  size: PropType.string,
};
