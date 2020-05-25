import React from 'react';
import { FaGithubSquare } from 'react-icons/fa';
import PropType from 'prop-types';

export default function GitHubIcon({ size }) {
  return <FaGithubSquare className="gridIcon" color="#211F1F" size={size} />;
}

GitHubIcon.defaultProps = {
  size: '1em',
};

GitHubIcon.propTypes = {
  size: PropType.string,
};
