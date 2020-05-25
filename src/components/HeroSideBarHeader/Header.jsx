import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import {
  Div, ListUl, ListLi, Button, Span,
} from '../../commonHtmlComponents';
import './style/HeaderHero.scss';

function Header() {
  const [bgClass, setBgColor] = useState('bgColorNone');

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
        <ListLi className="contactButtonContainer">
          <Button className="contactButton" type="button">
            <Span>Contact</Span>
          </Button>
        </ListLi>
        <ListLi><NavLink to="/about">About</NavLink></ListLi>
        {/* <ListLi><NavLink to="/about">Contact</NavLink></ListLi> */}
        <ListLi><NavLink to="/about">Work</NavLink></ListLi>
        {/* <ListLi><NavLink to="/about">Blogs</NavLink></ListLi> */}
      </ListUl>
    </Div>
  );
}

export default Header;
