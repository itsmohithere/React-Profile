import React from 'react';
import { render, unmountComponentAtNode } from 'react-dom';
import { act } from 'react-dom/test-utils';
import { shallow, mount } from 'enzyme';
import HomeHeader from './HomeHeader';
import CoverImage from './CoverImage';
import SocialLinksGrid from '../../commonComponents/SocialLinks/SocialLinksGrid/SocialLinksGrid';

describe('Test Header Component', () => {
  let container = null;

  beforeEach(() => {
    // setup a DOM element as a render target
    container = document.createElement('div');
    document.body.appendChild(container);
  });

  afterEach(() => {
    // cleanup on exiting
    unmountComponentAtNode(container);
    container.remove();
    container = null;
  });

  it('render header component', () => {
    act(() => {
      render(<HomeHeader />, container);
    });
    expect(container.querySelector("[data-testid='header']"));
  });

  it('render <CoverImage /> with img tag', () => {
    const wrapper = mount(<CoverImage />);
    expect(wrapper.find('img').length).toEqual(1);
  });

  it('render <Header /> with <SocialLinksGrid /> and four social link li', () => {
    const wrapper = mount(<HomeHeader />);
    expect(wrapper.find(SocialLinksGrid).find('li').length).toEqual(4);
  });
});
