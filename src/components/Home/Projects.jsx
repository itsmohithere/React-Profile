import React, { useRef, useEffect, forwardRef } from "react";
import { Div, Image, H1, Button } from "../../commonHtmlComponents";
import Card from "../../commonComponents/Card/Card";
import SpotImg from "../../assets/image/spot.jpg";
import ProjectButton from "../../commonComponents/ProjectButton/ProjectButton";

const ProjectOverview = () => <Div>OverView</Div>;

export default function Projects() {
  return (
    <Div className="container projectContainer" id="projects">
      <H1>Projects</H1>
      <Card className="projectCard">
        <Image src={SpotImg} alt="spot image" />
        <Div className="projectSection">
          <ProjectButton />
        </Div>
      </Card>
      https://www.almosafer.com/mweb/home https://mylook.acuvue.com/
      https://www.quarkexpeditions.com/start-your-adventure Quark
    </Div>
  );
}
