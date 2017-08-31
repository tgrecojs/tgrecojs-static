// @flow
/* eslint-disable react/no-danger */

import React from 'react';
import Link from 'next/link';
import { distanceInWordsToNow } from 'date-fns';
import styled from 'styled-components';
import renderMarkup from '../../lib/renderMarkup';
import { type Post } from '../../../types/post';
import theme from '../../lib/theme';

const Article = styled.article`
  button {
    width: 100%;
    height: 40px;
    background: #49768c;
    a {
      color: white;
    }
  }
  * {
    font-family: 'Lato', sans-serif;
  }
  h1 {
    padding: 1em;
  }
  .table-wrapper {
    overflow-x: auto;
  }
  table {
    border-collapse: collapse;
  }
  table th {
    background-color: ${theme.accent};
    color: ${theme.light};
  }
  table,
  th,
  td {
    border: 1px solid ${theme.dark};
  }
  th,
  td {
    padding: 10px;
  }
  blockquote {
    margin: 1.8rem 20px;
    padding: 1rem 10px;
    p {
      font-size: 1.4rem;
      margin: 0;
      display: inline;
    }
    p:before {
      font-size: 5rem;
      font-family: Georgia, serif;
      color: ${theme.dark.lighten(1.5)};
      content: open-quote;
      line-height: 0.3rem;
      margin-right: 0.8rem;
      vertical-align: -0.4em;
    }
    p:after {
      content: close-quote;
      visibility: hidden;
    }
  }
`;

export default ({ title, date, tags, body }: Post) =>
  <Article itemScope itemType="http://schema.org/BlogPosting" className="post">
    <header>
      <h1 itemProp="headline" className="post--title">
        {title}
      </h1>
      <div>
        <small className="post--tags">
          <span>Tags: </span>
          {tags.map((tag, index) =>
            <span key={tag} itemProp="keywords" className="post--tag">
              <Link
                href={`/tag?tag=${tag}`}
                as={`/tag/${tag.replace(/\s+/g, '-').toLowerCase()}`}
              >
                <a>
                  {tag}
                </a>
              </Link>
              {index !== tags.length - 1 ? ', ' : ''}
            </span>
          )}
        </small>
      </div>
      <div className="post--info">
        <span>
          <time itemProp="datePublished" dateTime={date}>
            {distanceInWordsToNow(date, { addSuffix: true })}
          </time>
        </span>
      </div>
    </header>
    <div
      className="post--body"
      dangerouslySetInnerHTML={{ __html: renderMarkup(body) }}
    />

    <button>
      <Link href="/">
        <a>Back to home</a>
      </Link>
    </button>
  </Article>;
