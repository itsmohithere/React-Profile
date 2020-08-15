import React, { useContext } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from '../components';
import HeroSideBarHeader from '../components/HeroSideBarHeader/HeroSideBarHeader';
import { AppContext } from '../components/contextAPI/ctxApp';
import ScrollTop from '../components/ScrollTop/ScrollTop';

const SwitchRoute = () => (
  <Switch>
    <Route exact path="/" component={Home} />
  </Switch>
);

function Routes() {
  const value = useContext(AppContext);

  return (
    <BrowserRouter>
      <HeroSideBarHeader>
        <ScrollTop />
        <SwitchRoute />
      </HeroSideBarHeader>
    </BrowserRouter>
  );
}

export default Routes;
