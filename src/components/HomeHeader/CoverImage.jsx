import React from 'react';
import Particles from 'react-particles-js';
import params from '../Home/particles.config';

import { Div } from '../../commonHtmlComponents';
// import codeImage from '../../assets/image/coverr.jpg';

export default function CoverImage() {
  return (
    <Div className="headerImage">
      {/* <Particles
        className="particleContainer"
        params={params}
      /> */}
      {/* <Image src={codeImage} /> */}
    </Div>
  );
}
