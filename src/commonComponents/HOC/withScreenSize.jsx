import React from 'react';
import PropTypes from 'prop-types';

export default function WithScreenSize({ children, device }) {
  const screenSize = {
    mobile: {
      min: 320,
      max: 480,
    },
    tablet: {
      min: 768,
      max: 1024,
    },
    desktop: {
      min: 1025,
      max: 2500,
    },
  };

  const GetDeviceScreen = () => {
    const { width } = window.screen;
    const { min, max } = screenSize[device];

    if (width >= min && width <= max) {
      return children;
    }
    return null;
  };

  const GetMultipleDeviceScreen = () => {
    const { width } = window.screen;
    const hasScreen = (element) => (
      width >= screenSize[element].min && width <= screenSize[element].max
    );

    if (device.some(hasScreen)) {
      return children;
    }
    return null;
  };

  return (
    typeof device === 'object'
      ? <GetMultipleDeviceScreen />
      : <GetDeviceScreen />
  );
}

WithScreenSize.propTypes = {
  children: PropTypes.oneOfType([PropTypes.object, PropTypes.string]).isRequired,
  device: PropTypes.oneOfType([PropTypes.string, PropTypes.array]).isRequired,
};
