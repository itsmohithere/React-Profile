import React, { useEffect, useState } from 'react';
import { FaArrowAltCircleUp } from 'react-icons/fa';
import { Div } from '../../commonHtmlComponents';
import './scrolltop.scss';
import WithScreenSize from '../../commonComponents/HOC/withScreenSize';


export default function ScrollTop() {
  const [isScroll, setIsScroll] = useState(false);

  const scrollToTopHandler = () => {
    window.scroll({
      top: 0,
      left: 0,
      behavior: 'smooth',
    });
  };

  const scrollDispHandler = (unmount) => {
    if (!unmount) {
      if (window.scrollY >= 400) {
        setIsScroll(true);
      } else {
        setIsScroll(false);
      }
    }
  };

  useEffect(() => {
    let unmount = false;
    window.addEventListener('scroll', () => scrollDispHandler(unmount), true);
    return (() => {
      unmount = true;
      window.removeEventListener('scroll', () => scrollDispHandler(unmount));
    });
  }, []);

  return isScroll && (
    <WithScreenSize device={['tablet', 'mobile']}>
      <Div className="scrollTop" onClick={scrollToTopHandler}>
        <FaArrowAltCircleUp size="3em" />
      </Div>
    </WithScreenSize>
  );
}
