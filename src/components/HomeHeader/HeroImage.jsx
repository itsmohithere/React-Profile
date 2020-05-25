import React from 'react';
import { Div, Image } from '../../commonHtmlComponents';
import HeroImg from '../../assets/image/pp1.jpg';

export default function HeroImage() {
  return (
    <>
      <Div className="heroImageGradient" />
      <Div className="heroImage">
        {/* <Image src={HeroImg} alt="heroImage" /> */}
        {/* <Div className="heroImageDiv"> */}
          <Image src={HeroImg} alt="heroImage" />
        {/* </Div> */}
      </Div>
    </>
  );
}
