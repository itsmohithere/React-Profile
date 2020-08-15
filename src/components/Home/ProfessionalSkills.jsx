import React from 'react';
import {
  ListUl, ListLi, Div, H1, Span,
} from '../../commonHtmlComponents';
import ProgressBar from '../../commonComponents/ProgressBar/ProgressBar';
import Card from '../../commonComponents/Card/Card';

export default function ProfessionalSkills() {
  return (
    <Div className="container professionalContainer" id="professionalSkills">
      <H1>Professional Skills</H1>
      <Card className="professionalCard">
        <ListUl>
          <ListLi>
            <Span>JavaScript</Span>
            <ProgressBar width="85%" className="progressBarContainer" />
            <Span>85%</Span>
          </ListLi>
          <ListLi>
            <Span>React.JS</Span>
            <ProgressBar width="95%" className="progressBarContainer" />
            <Span>95%</Span>
          </ListLi>
          <ListLi>
            <Span>Redux</Span>
            <ProgressBar width="90%" className="progressBarContainer" />
            <Span>90%</Span>
          </ListLi>
          <ListLi>
            <Span>Node.JS</Span>
            <ProgressBar width="25%" className="progressBarContainer" />
            <Span>25%</Span>
          </ListLi>
          <ListLi>
            <Span>CSS</Span>
            <ProgressBar width="55%" className="progressBarContainer" />
            <Span>55%</Span>
          </ListLi>
          <ListLi>
            <Span>Node.JS</Span>
            <ProgressBar width="25%" className="progressBarContainer" />
            <Span>25%</Span>
          </ListLi>
        </ListUl>
      </Card>
    </Div>

  );
}
