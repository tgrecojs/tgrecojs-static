import React from 'react';

const toggleLinksFn = () => {
  const linksEl = document.querySelector('.narrowLinks');
  if (linksEl.style.display === 'block') {
    linksEl.style.display = 'none';
  } else {
    linksEl.style.display = 'block';
  }
};

const NavComponent = ({ toggleLinks = toggleLinksFn }) =>
  <nav>
    <style jsx>
      {`
    nav {
      background-color: rgb(86,156,183);
      font-family: 'Inconsolata',san-serif
      overflow: hidden;
      width: 100%;
      position: fixed;
      top: 0;
      padding: 1em;
      border-bottom: 1px solid #49768c;
    }
    a {
      color: #fff;
    }
    a:visited {
      color: #fff;
    }
    .navWide {
      display: none;
      margin: 0 auto;
    }
    .navWide .wideDiv {
      text-align: center;
    }
    .navWide .wideDiv a {
      text-decoration: none;
      display: inline-block;
      padding: 0 2em;
    }
    .navNarrow i {
      float: left;
      cursor: pointer;
      color: #fff;
    }
    .navNarrow .narrowLinks {
      display: none;
    }
    .navNarrow .narrowLinks a {
      text-decoration: none;
      display: block;
      float: left;
      clear: left;
      padding: 0.5em 0;
    }

    @media (min-width: 480px) {
      .navWide {
        display: block;
      }
      .navNarrow {
        display: none;
      }
    }
  `}
    </style>
    <div className="navWide">
      <div className="wideDiv">
        <a href="#">Link 1</a>
        <a href="#">Link 2</a>
        <a href="#">Link 3</a>
      </div>
    </div>
    <div className="navNarrow">
      <i className="fa fa-bars fa-2x" onClick={() => toggleLinks()} />
      <div className="narrowLinks">
        <a href="#" onClick={toggleLinks}>
          Link 1
        </a>
        <a href="#" onClick={toggleLinks}>
          Link 2
        </a>
        <a href="#" onClick={toggleLinks}>
          Link 3
        </a>
      </div>
    </div>
  </nav>;

export default NavComponent;
