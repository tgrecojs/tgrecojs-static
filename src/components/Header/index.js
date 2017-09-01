// @flow
/* eslint-disable react/no-danger */

import React from 'react';
import styled from 'styled-components';
import config from '../../../config';
import Link from 'next/link';
// import { defaultColors } from '../../lib/theme';
import StyledNav from '../navbar/index';
const Nav = styled.nav`
  display: flex;
  width: 100%;
  align-items: center;
  color: #fff;
  justify-content: space-around;
  background: rgb(86, 156, 183);
`;

const Logo = styled.img`max-width: 300px;
margin-top: 3em;`

export default () =>
  <div className="header">
    <Logo src="/static/tg-logo.png" />
      <h3>Providing the latest in web application programming.</h3>
  </div>;
