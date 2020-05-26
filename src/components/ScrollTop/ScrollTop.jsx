import React, { useEffect, useState } from 'react';
import { FaArrowAltCircleUp } from 'react-icons/fa';
import { Div } from '../../commonHtmlComponents';
import './scrolltop.scss';


export default function ScrollTop() {
  const [isScroll, setIsScroll] = useState(false);

  const scrollToTopHandler = () => {
    window.scroll({
      top: 0,
      left: 0,
      behavior: 'smooth',
    });
  };

  const scrollDispHandler = () => {
    if (window.scrollY >= 400) {
      setIsScroll(true);
    } else {
      setIsScroll(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', scrollDispHandler, true);
    return (() => {
      window.removeEventListener('scroll', scrollDispHandler);
    });
  }, []);

  return isScroll && (
    <Div className="scrollTop" onClick={scrollToTopHandler}>
      <FaArrowAltCircleUp size="3em" />
    </Div>
  );
}
