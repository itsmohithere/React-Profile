import React from 'react';
import { Div } from '../../commonHtmlComponents';
import HeroName from './HeroName';
import HeroImage from './HeroImage';
import HeroQuote from './HeroQuote';

export default function ProfileImageName() {
  return (
    <Div className="profileImageContainer" id="headerDiv">
      <HeroImage />
      <HeroQuote />
      <HeroName />
    </Div>
  );
}
