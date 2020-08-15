import React from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import { ForDevice } from 'media-query-react';
import {
  Div,
} from '../../commonHtmlComponents';
import './style/HeaderHero.scss';
import Header from './Header';
import Sidebar from './Sidebar';

function HeroSideBarHeader({ children }) {
  return (
    <Div>
      <ForDevice deviceName={['tablet', 'desktop']}>
        <Header />
      </ForDevice>
      <ForDevice deviceName={['mobile', 'mobileLandscape']}>
        <Sidebar />
      </ForDevice>
      { children }
    </Div>
  );
}

HeroSideBarHeader.propTypes = {
  children: PropTypes.oneOfType([PropTypes.string, PropTypes.object, PropTypes.array]).isRequired,
};

export default withRouter(HeroSideBarHeader);
