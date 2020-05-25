import React, { createContext } from 'react';
import CtxHeader from './ctxHeader';
import combineReducers from './store';
import CtxHome from './ctxHome';

export const AppContext = createContext({});

const state = {
  abc: 'anc',
};

export default function ctxApp({ children }) {
  combineReducers([
    CtxHeader,
    CtxHome,
  ]);
  // const { state, dispatch } = CtxHeader();

  // console.log( { state, dispatch });
  return (
    <AppContext.Provider value={state}>
      {children}
    </AppContext.Provider>
  );
}
