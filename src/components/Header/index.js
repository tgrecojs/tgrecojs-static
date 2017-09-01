// @flow
/* eslint-disable react/no-danger */

import React from 'react';
import styled from 'styled-components';
import config from '../../../config';
import Link from 'next/link';
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
    <Link href="/contact" as="/contact"> 
      <a>
        Contact Me
      </a>
    </Link>
      <Link href="https://github.com/tgrecojs">
        <a>
          <img src="/static/GitHub-Mark-32px.png" alt="tgrecojs github" />
        </a>
      </Link>
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
      <h3>Providing the latest in web application programming.</h3>
    </div>
  </header>;
