// @flow
/* eslint-disable react/no-danger */

import React from 'react';
import styled from 'styled-components';
import config from '../../../config';
// import { defaultColors } from '../../lib/theme';

const Nav = styled.nav`
  display: flex;
  width: 100%;
  align-items: center;
  color: #fff;
  justify-content: space-around;
  background: rgb(86, 156, 183);
`;

const Logo = styled.img`max-width: 350px;`;

export default () =>
  <header>
    <Nav>
      <h4>By Category</h4>
      <iframe
        src="https://platform.twitter.com/widgets/follow_button.html?screen_name=TwitterDev&show_screen_name=false&show_count=false&size=l"
        title="Follow TwitterDev on Twitter"
        width="80"
        height="30"
        style={{ border: '0', overflow: 'hidden' }}
      />
    </Nav>
    <h1 className="header--siteName">
      {config.siteName}
    </h1>
    <Logo src="/static/tg-logo.png" />
    <div className="header--slogan">
      <h3>I write about some of the stuff that I think is important.</h3>
    </div>
  </header>;
