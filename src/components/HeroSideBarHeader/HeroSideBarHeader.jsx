import React from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import {
  Div,
} from '../../commonHtmlComponents';
import './style/HeaderHero.scss';
import Header from './Header';
import WithScreenSize from '../../commonComponents/HOC/withScreenSize';
import Sidebar from './Sidebar';

function HeroSideBarHeader({ children }) {
  return (
    <Div>
      <WithScreenSize device={['tablet', 'desktop']}>
        <Header />
      </WithScreenSize>
      <WithScreenSize device="mobile">
        <Sidebar />
      </WithScreenSize>
      { children }
    </Div>
  );
}

HeroSideBarHeader.propTypes = {
  children: PropTypes.oneOfType([PropTypes.string, PropTypes.object]).isRequired,
};

export default withRouter(HeroSideBarHeader);
