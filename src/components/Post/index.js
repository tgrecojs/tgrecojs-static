// @flow
/* eslint-disable react/no-danger */

import React from 'react';
import Link from 'next/link';
import { distanceInWordsToNow } from 'date-fns';
import styled from 'styled-components';
import renderMarkup from '../../lib/renderMarkup';
import { type Post } from '../../../types/post';
import theme from '../../lib/theme';
import ShareButton from '../shared/ShareOnTwitter';

const Article = styled.article`
  .twitter-icon {
    max-width: 50px;
  }
  .twitter-link {
    display: flex;
    align-items: center;
  }
  .post-btn-row {
    display: flex;
    justify-content: space-around;
    align-items: center;
  }
  button {
    width: 25%;
    height: 40px;
    background: #49768c;
    a {
      color: white;
    }
  }
  @media (max-width: 600px) {
    button {
      width: 50%;
      margin-bottom: 16px;
    }
    .post-btn-row {
      flex-direction: column;
    }
  }
  * {
    font-family: 'Lato', sans-serif;
  }
  h1 {
    padding: .5em;
    line-height: 1.3em;
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

export default ({ title, date, tags, body, slug }: Post) =>
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
    <ShareButton title={title} slug={slug} />
  </Article>;
