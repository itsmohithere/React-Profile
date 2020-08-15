import React, { useEffect, useState } from 'react';
import { Button } from '../../commonHtmlComponents';
import 'react-sliding-pane/dist/react-sliding-pane.css';
import SliderModal from '../SliderModal/SliderModal';

export default function ProjectButton() {
  const [showAnim, setShowAnim] = useState(false);
  const [isPaneOpen, setIsPaneOpen] = useState(false);

  const projectDisplayHandler = () => {
    setIsPaneOpen(!isPaneOpen);
  };

  const handleScroll = () => {
    document.documentElement.style.setProperty('--scroll-y', `${window.scrollY}px`);
    if (window.scrollY >= document.getElementById('projects').offsetTop + 500) {
      setShowAnim(true);
    }
  };

  useEffect(() => {
    const rootElem = document.getElementById('root');
    if (isPaneOpen) {
      const scrollY = document.documentElement.style.getPropertyValue('--scroll-y');
      rootElem.style.position = 'fixed';
      rootElem.style.top = `-${scrollY}`;
    } else {
      const scrollY = rootElem.style.top;
      rootElem.style.position = '';
      rootElem.style.top = '';
      window.scrollTo(0, parseInt(scrollY || '0', 0) * -1);
    }
  }, [isPaneOpen]);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, true);
    return (() => {
      window.removeEventListener('scroll', handleScroll);
    });
  }, []);

  return (
    <>
      <Button type="button" className={`button ${showAnim ? 'animateProjectButton' : ''}`} style={{ background: '#ea5a61' }}>
        Johnson & Johnson
      </Button>
      <Button
        type="button"
        className={`button ${showAnim ? 'animateProjectButton' : ''}`}
        onClick={projectDisplayHandler}
        style={{ background: '#0e2d63' }}
      >
        The Estée Lauder Companies Inc.
      </Button>
      <Button type="button" className={`button ${showAnim ? 'animateProjectButton' : ''}`} style={{ background: '#052c3d' }}>
        Almosafer
      </Button>
      <Button type="button" className={`button ${showAnim ? 'animateProjectButton' : ''}`} style={{ background: '#fab713' }}>
        Quark Expeditions
      </Button>
      <Button type="button" className={`button ${showAnim ? 'animateProjectButton' : ''}`} style={{ background: '#333333' }}>
        Solumina
      </Button>
      <Button type="button" className={`button ${showAnim ? 'animateProjectButton' : ''}`} style={{ background: '#8e86ed' }}>
        Emagine.ai
      </Button>
      {
        isPaneOpen
          && (
          <SliderModal
            isPaneOpen={isPaneOpen}
            onClose={projectDisplayHandler}
          />
          )
      }
    </>
  );
}
