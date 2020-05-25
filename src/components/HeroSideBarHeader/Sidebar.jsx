import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { RiMenuAddLine } from 'react-icons/ri';
import { AiOutlineClose } from 'react-icons/ai';
import {
  Div,
} from '../../commonHtmlComponents';
import './style/sidebar.scss';
import Anchor from '../../commonHtmlComponents/Anchor';


export default function Sidebar() {
  const [isMenuOpen, setIsMenuOpen] = useState(true);

  const menuButtonHandler = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <Div className="sidebarContainer">
      {
        isMenuOpen && (
          <>
            <nav className="sidebarNav">
              <Div className="navDivWrp">
                <a href="mailto:itsmohitsaxenahere@gmail.com">
                  Contact
                </a>
              </Div>
              <Div className="navDivWrp">
                <NavLink to="/about">About</NavLink>
              </Div>
              <Div className="navDivWrp">
                <NavLink to="/about">Work</NavLink>
              </Div>
            </nav>
            <Anchor className="menuIconClose" onClick={menuButtonHandler}>
              <AiOutlineClose className="closeIcon" size="1em" />
            </Anchor>
          </>
        )
      }
      {
        !isMenuOpen && (
          <Anchor onClick={menuButtonHandler}>
            <RiMenuAddLine className="menuIcon" />
          </Anchor>
        )
      }
    </Div>
  );
}
