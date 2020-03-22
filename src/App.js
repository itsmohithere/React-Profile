import React from 'react';
import {hot} from 'react-hot-loader';

function App(params) {
  return (
    <React.Fragment>
      <h1>THIS IS MY PROFILE</h1>
      <p>Making profile for me</p>
    </React.Fragment>
  );
}

export default hot(module)(App);
