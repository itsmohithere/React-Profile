import React from 'react';
import {
  H1, ListUl, ListLi, Div, Span,
} from '../../commonHtmlComponents';
import Card from '../../commonComponents/Card/Card';

export default function BasicInfo() {
  return (
    <Card className="cardContainer">
      <Div className="cardDiv basicInfo">
        <H1>Basic Info</H1>
        <ListUl>
          <ListLi>
            <H1>Age:</H1>
            <Span>28</Span>
          </ListLi>
          <ListLi>
            <H1>E-mail:</H1>
            <Span>itsmohitsaxenahere@gmail.com</Span>
          </ListLi>
          <ListLi>
            <H1>Address:</H1>
            <Span>New Delhi, India</Span>
          </ListLi>
          <ListLi>
            <H1>Education:</H1>
            <Span>Master of Computer Application</Span>
          </ListLi>
          <ListLi>
            <H1>Language:</H1>
            <Span>Hindi, English</Span>
          </ListLi>
        </ListUl>
      </Div>
    </Card>
  );
}
