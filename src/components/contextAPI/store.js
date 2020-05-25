import React from 'react';

const combineReducers = ([...rest]) => {
  let masterState = {}, masterDispatch = {};

  const masters = [...rest].map(item => {
    const { type, state, dispatch } = item();
    console.log({type, state, masterState})

    const typeObj = Object.assign( type );

    return Object.assign( typeObj );

  });

  console.log({masters})
}

export default combineReducers;
