import React from 'react';
import CoverImage from './CoverImage';
import { Div } from '../../commonHtmlComponents';
import ProfileImageName from './ProfileImageName';
import './style/header.scss';
import { SocialLinksGrid } from '../../commonComponents';

function HomeHeader() {
  return (
    <>
      <Div className="header" data-testid="header">
        {/* <CoverImage /> */}
        <ProfileImageName />
        {/* <SocialLinksGrid /> */}
      </Div>
    </>
  );
}

export default HomeHeader;
