import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { useMediaQuery } from 'media-query-react';
import {
  Div, ListUl, ListLi, Button, Span,
} from '../../commonHtmlComponents';
import './style/HeaderHero.scss';

function Header() {
  const [bgClass, setBgColor] = useState('bgColorNone');
  const isDesktop = useMediaQuery({ query: 'min-width: 1024px' });

  const handleScroll = () => {
    if (window.scrollY >= document.getElementById('headerDiv').scrollHeight) {
      setBgColor('bgColor');
    } else {
      setBgColor('bgColorNone');
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, true);
    return (() => {
      window.removeEventListener('scroll', handleScroll);
    });
  }, []);


  return (
    <Div className={`HeaderHeroContainer ${bgClass}`}>
      <ListUl>
        {
          isDesktop && (
          <ListLi className="contactButtonContainer">
            <a className="contactButton" href="mailto:itsmohitsaxenahere@gmail.com">
              <Span>Contact</Span>
            </a>
          </ListLi>
          )
        }
        <ListLi><NavLink to="/about">About</NavLink></ListLi>
        <ListLi><NavLink to="/about">Work</NavLink></ListLi>
      </ListUl>
    </Div>
  );
}

export default Header;
