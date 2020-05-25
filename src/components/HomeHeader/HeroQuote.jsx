import React from 'react';
import { AiTwotoneHeart } from 'react-icons/ai';
import {
  Div, Span, Paragraph,
} from '../../commonHtmlComponents';
import { SocialLinksGrid } from '../../commonComponents';


export default function HeroQuote() {
  return (
    <Div className="heroQuote">
      <Div className="theQuoteDiv">
        <Span className="heart">
          <AiTwotoneHeart color="#d20606" />
          To
        </Span>
        <Paragraph>Write Code.</Paragraph>
        <Div className="secondLine">
          <Paragraph>Talk about</Paragraph>
          <Div className="anmWord">
            <Span>JavaScript.</Span>
            <Span>  Food.</Span>
            <Span>  Games.</Span>
            <Span>  Travel.</Span>
          </Div>
        </Div>
      </Div>
      <SocialLinksGrid />
    </Div>
  );
}
