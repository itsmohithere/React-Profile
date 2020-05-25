import React from 'react';
import { Div, ListUl, ListLi } from '../../../commonHtmlComponents';
import GitHubIcon from '../GitHubIcon';
import LinkedInIcon from '../LinkedInIcon';
import NPMIcon from '../NPMIcon';
import TwitterIcon from '../TwitterIcon';
import Anchor from '../../../commonHtmlComponents/Anchor';

export default function SocialLinksGrid() {
  return (
    <Div className="socialLinkContainer">
      <ListUl className="listUl">
        <ListLi className="listLi">
          <Anchor href="https://github.com/itsmohithere" target="_blank">
            <GitHubIcon size="5em" />
          </Anchor>
        </ListLi>
        <ListLi className="listLi">
          <Anchor href="https://www.linkedin.com/in/itsmohithere/" target="_blank">
            <LinkedInIcon size="5em" />
          </Anchor>
        </ListLi>
        <ListLi className="listLi">
          <Anchor href="https://www.npmjs.com/~itsmohithere" target="_blank">
            <NPMIcon size="5em" />
          </Anchor>
        </ListLi>
        <ListLi className="listLi">
          <Anchor href="https://twitter.com/mohit5909" target="_blank">
            <TwitterIcon size="5em" />
          </Anchor>
        </ListLi>
      </ListUl>
    </Div>
  );
}
