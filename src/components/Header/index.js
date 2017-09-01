// @flow
/* eslint-disable react/no-danger */

import React from 'react';
import styled from 'styled-components';

const Logo = styled.img`
  max-width: 300px;
  margin-top: 3em;
`;

export default () =>
  <div className="header">
    <Logo src="/static/tg-logo.png" />
    <h3>Providing the latest in web application programming.</h3>
  </div>;
