import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import SlidingPane from 'react-sliding-pane';

export default function SliderModal({ isPaneOpen, onClose }) {
  return (
    <SlidingPane
      className="slidingPaneContainer"
      overlayClassName=""
      isOpen={isPaneOpen}
      title="Hey, it is optional pane title.  I can be React component too."
      subtitle="Optional subtitle."
      from="bottom"
      onRequestClose={() => {
        // triggered on "<" on left top click or on outside click
        onClose(false);
      }}
      width="100"
    >
      <div id="sliderPane">And I am pane content. BTW, what rocks?</div>
      <br />
      {/* <img src="img.png" /> */}
    </SlidingPane>
  );
}

SliderModal.propTypes = {
  isPaneOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
};
