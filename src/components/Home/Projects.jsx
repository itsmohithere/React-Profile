import React from 'react';
import {
  Div, Image, H1, Span, Button,
} from '../../commonHtmlComponents';
import Card from '../../commonComponents/Card/Card';
import SpotImg from '../../assets/image/spot.jpg';

export default function Projects() {
  return (
    <Div className="container projectContainer">
      <H1>Projects</H1>
      <Card className="projectCard">
        <Image src={SpotImg} alt="spot image" />
        <Div className="projectSection">
          <Button type="button" className="button">
            Project 1
          </Button>
          <Button type="button">
            Project 2
          </Button>
          <Button type="button">
            Project 3
          </Button>
          <Button type="button">
            Project 4
          </Button>
          <Button type="button">
            Project 5
          </Button>
          <Button type="button">
            Project 6
          </Button>
        </Div>
      </Card>
    </Div>
  );
}
