// @flow

import styled from 'styled-components';

const space = 30;
const medium = '700px';

export default styled.div`
  .content {
    background: #49768c;
    flex: 1;
    height: 100%;
    padding: 3px;
  }
  a {
    text-decoration: none;
  }

  .header {
    display: flex;
    flex-direction: column;
    align-items: center;
    font-family: 'Inconsolata', san-serif;
    margin-top: 1.25em;
  }

  main {
    font-family: 'Inconsolata', san-serif;
    max-width: 500px;
    font-size: 16px;
    @media (min-width: ${medium}) {
      max-width: 100%;
    }
    margin: ${space}px auto;
  }

  .home-link {
    margin-left: ${space}px;
  }

  .footer {
    padding: ${space}px;
    text-align: center;
  }

  .post {
    margin: ${space / 2}px ${space}px ${space}px;
    line-height: 1.4em;
    padding: 1em;
    background: #fff;
    border: 1px solid black;
    h1 {
      display: inline-block;
      margin: 0;
    }
  }
  @media (max-width: 672px) {
    .post {
      margin: 5px;
    }
  }

  .post .post--body {
    margin: ${space / 2}px 0;
  }

  .post--info {
    margin: ${space / 2}px 0;
  }

  .post--info span:not(:first-child) {
    border-left: 1px solid #000;
    padding-left: 5px;
  }

  .post--info span:first-child {
    padding-right: 5px;
  }
`;
