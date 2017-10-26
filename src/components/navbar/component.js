import React from 'react';
import Link from 'next/link';
import Modal from '../shared/modal';
const toggleLinksFn = () => {
  const linksEl = document.querySelector('.narrowLinks');
  linksEl.style.display === 'block'
    ? (linksEl.style.display = 'none')
    : (linksEl.style.display = 'block');
};

const NavComponent = ({ toggleLinks = toggleLinksFn }) =>
  <nav>
    <style jsx>
      {`
    nav {
      background-color: rgb(86,156,183);
      font-family: 'Lato',san-serif
      overflow: hidden;
      width: 100%;
      position: fixed;
      top: 0;
      padding: 1em;
      border-bottom: 1px solid #49768c;
      z-index: 1;
    }
    a {
      color: #fff;
      transition: all .2s ease-in-out;
    }
    a:hover {
      transform: scale(1.2);
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
    .wideDiv {
        display: flex;
        align-items: center;
        justify-content: space-around;
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
        <Link href={`/`}>
          <a>Blogroll</a>
        </Link>
          <a
            href="https://app.acuityscheduling.com/schedule.php?owner=13089768"
            className="acuity-embed-button"
            style={{
              background: '#49768c',
              color: '#fff',
              padding: '8px 12px',
              border: '0px',
              boxShadow: '0 -2px 0 rgba(0,0,0,0.15)',
              borderRadius: '4px',
              textDecoration: 'none',
              display: 'inline-block',
            }}
          >
            Schedule Appointment
          </a>
        <a>
          <iframe
            src="https://platform.twitter.com/widgets/follow_button.html?screen_name=tgrecojs&show_screen_name=false&show_count=false&size=l"
            title="Follow TwitterDev on Twitter"
            width="80"
            height="30"
            style={{ border: '0', overflow: 'hidden' }}
          />
        </a>
      </div>
    </div>
    <div className="navNarrow">
      <i className="fa fa-bars fa-2x" onClick={() => toggleLinks()} />
      <div className="narrowLinks">
        <Link href={`/contact`} as={`/contact`}>
          <a>Contact Me</a>
        </Link>
        <a
        href="https://app.acuityscheduling.com/schedule.php?owner=13089768"
        className="acuity-embed-button"
        style={{
          background: '#49768c',
          color: '#fff',
          padding: '8px 12px',
          border: '0px',
          boxShadow: '0 -2px 0 rgba(0,0,0,0.15)',
          borderRadius: '4px',
          textDecoration: 'none',
          display: 'inline-block',
        }}
      >
        Schedule Appointment
      </a>
        <Link href="/">
          <a onClick={toggleLinks}>Home</a>
        </Link>
        <a>
          <iframe
            src="https://platform.twitter.com/widgets/follow_button.html?screen_name=TwitterDev&show_screen_name=false&show_count=false&size=l"
            title="Follow tgrecojs on Twitter"
            width="80"
            height="30"
            style={{ border: '0', overflow: 'hidden' }}
          />
        </a>
        <a onClick={toggleLinks}>Close Menu</a>
      </div>
    </div>
  </nav>;

export default NavComponent;
