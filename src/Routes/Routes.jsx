import React, { useContext } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from '../components';
import HeroSideBarHeader from '../components/HeroSideBarHeader/HeroSideBarHeader';
import { AppContext } from '../components/contextAPI/ctxApp';

const SwitchRoute = () => (
  <Switch>
    <Route exact path="/" component={Home} />
  </Switch>
);

function Routes() {
  const value = useContext(AppContext);
  console.log(value);

  return (
    <BrowserRouter>
      <HeroSideBarHeader>
        <SwitchRoute />
      </HeroSideBarHeader>
    </BrowserRouter>
  );
}

export default Routes;
