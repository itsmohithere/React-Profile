import React, { createContext, useReducer } from 'react';
import CtxApp from './ctxApp';

const initialState = {
  socialLinks: {
    gitHubUrl: '',
    linkedInUrl: '',
    npmUrl: ''
  }
}

function reducer(state = initialState, action) {
  switch (action.type) {
    case "socialLinksUpdate":
      
      break;
  
    default:
      break;
  }
}

export default function CtxHeader() {
  const [state, dispatch] = useReducer(reducer, initialState);

  return {
    type: "headerReducer",
    state,
    dispatch
  }
}
