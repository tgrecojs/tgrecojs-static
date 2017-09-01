import React from 'react';
import styled from 'styled-components';
import { StickyContainer, Sticky } from 'react-sticky';
import Navbar from './component';

let i = 0;
const Header = (props = {}) =>
  <div
    style={{ ...props.style, height: 80, overflow: 'auto', background: '#aaa' }}
  >
    <h2>
      <span className="pull-left">
        &lt;Sticky /&gt; <small>(invocation: #{i++})</small>
      </span>
    </h2>
  </div>;

const toggleLinks = () => {
  const linksEl = document.querySelector('.narrowLinks');
  if (linksEl.style.display === 'block') {
    linksEl.style.display = 'none';
  } else {
    linksEl.style.display = 'block';
  }
};

const StickyNavbar = ({ burgerToggle = toggleLinks }) =>
  <div style={{ height: 1500, margin: '0 30px' }}>
    <h2>Content before the Sticky...</h2>
    <div style={{ marginBottom: 200 }} />
    <StickyContainer
      style={{ height: 500, background: '#ddd', padding: '0 30px' }}
    >
      <Sticky>
        {({
          isSticky,
          wasSticky,
          style,
          distanceFromTop,
          distanceFromBottom,
          calculatedHeight,
        }) => {
          console.log({
            isSticky,
            wasSticky,
            style,
            distanceFromTop,
            distanceFromBottom,
            calculatedHeight,
          });
          return <Header style={style} />;
        }}
      </Sticky>

      <h2 className="text-center" style={{ marginTop: 150 }}>
        &lt;StickyContainer /&gt;
      </h2>
    </StickyContainer>
    <div style={{ marginBottom: 200 }} />
    <h2>Content after the Sticky...</h2>
  </div>;

  export default StickyNavbar;
