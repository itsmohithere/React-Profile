import React from 'react';
import { hot } from 'react-hot-loader';
import MediaQueryReact from 'media-query-react';
import Routes from './Routes';
import CtxApp from './components/contextAPI/ctxApp';
import './assets/styles/scss/app.scss';

// Entry point
function App() {
  const screenSize = {
    mobile: {
      minWidth: 320,
      maxWidth: 480,
    },
    mobileLandscape: {
      minWidth: 481,
      maxWidth: 767,
    },
    tablet: {
      minWidth: 768,
      maxWidth: 1024,
    },
    desktop: {
      minWidth: 1025,
      maxWidth: 2500,
    },
  };
  return (
    <CtxApp>
      <MediaQueryReact mediaQueries={screenSize}>
        <Routes />
      </MediaQueryReact>
    </CtxApp>
  );
}

export default hot(module)(App);
