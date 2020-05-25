import React, { createContext, useReducer } from 'react';
import CtxApp from './ctxApp';

const initialState = {
  title: 'home'
}

function reducer(state = initialState, action) {
  switch (action.type) {
    case "socialLinksUpdate":
      
      break;
  
    default:
      break;
  }
}

export default function CtxHome() {
  const [state, dispatch] = useReducer(reducer, initialState);

  return {
    type: "HomeReducer",
    state,
    dispatch
  }
}
