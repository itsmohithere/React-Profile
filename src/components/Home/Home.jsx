import React from 'react';
import Particles from 'react-particles-js';
import { Div } from '../../commonHtmlComponents';
import HomeHeader from '../HomeHeader/HomeHeader';
import About from './About';
import BasicInfo from './BasicInfo';
import './styles/home.scss';
import ProfessionalSkills from './ProfessionalSkills';
import Projects from './Projects';
import params from './particles.config';

export default function Home() {
  return (
    <>
      <HomeHeader />
      <Div className="homeContainer">
        <Particles
          className="particleContainer"
          params={params}
        />
        <Div className="home">
          <Div className="container aboutSkillsContainer">
            <About />
            <BasicInfo />
          </Div>
          <ProfessionalSkills />
          <Projects />
        </Div>
      </Div>
    </>
  );
}
