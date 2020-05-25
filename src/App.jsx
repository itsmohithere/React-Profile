import React from 'react';
import { hot } from 'react-hot-loader';
import Routes from './Routes';
import CtxApp from './components/contextAPI/ctxApp';
import './assets/styles/scss/app.scss';

function App() {
  return (
    <CtxApp>
      <Routes />
    </CtxApp>
  );
}

export default hot(module)(App);
