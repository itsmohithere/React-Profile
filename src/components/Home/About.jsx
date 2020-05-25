import React from 'react';
import { H1, Div } from '../../commonHtmlComponents';
import Paragraph from '../../commonHtmlComponents/Paragraph';
import Card from '../../commonComponents/Card/Card';

export default function About() {
  const boldLetterPOne = <strong>CMS, CRM, Admin Panel and websites.</strong>;
  const pOneText = 'Hello! I am passionate JavaScript developer and have handfull of expirience in developing ';
  const pTwoText = 'I define strategies & communications that you will need to transform your business experiences and improve people’s lives. By digging into business problems, I analyse, define and solve them with the help of productive ideas.';
  return (
    <Card className="cardContainer">
      <Div className="cardDiv about">
        <H1>About</H1>
        <Paragraph>
          {pOneText}
          {boldLetterPOne}
        </Paragraph>
        <Paragraph>
          {pTwoText}
        </Paragraph>
      </Div>
    </Card>
  );
}
