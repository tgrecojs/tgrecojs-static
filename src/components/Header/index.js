// @flow
/* eslint-disable react/no-danger */

import React from 'react';
import styled from 'styled-components';
import config from '../../../config';
// import theme from '../../lib/theme';

/**
 * const Header = styled.header`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
*/

const Logo = styled.img`max-width: 350px;`;

export default () =>
  <header>
    <h1 className="header--siteName">
      {config.siteName}
    </h1>
    <Logo src="../../../static/tg-logo.png" />
    <div className="header--slogan">
      <h3>I write about some of the stuff that I think is important.</h3>
    </div>
  </header>;
