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
  p img {
    display: flex;
    align-items: center;
    justify-content: center;
    max-width: 100%;
  }
  img {
    max-width: 600px;
    max-height: 100%;
    margin: auto;
  }
  @media and (max-width: 600px) {
    img {
      width: 100%;
      margin: 0;
    }
  }
  code {
    color: #49768c;
    font-size: .9em;
  }
  p,
  h1,
  h2,
  h3,
  h4,
  button {
    font-family: 'Lato', sans-serif;
  }
  h1 {
    padding: .5em;
    line-height: 1.3em;
    text-align: center;
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
  iframe {
    border: 2px solid #49768c;
    border-radius: 5px;
    display: flex;
  }
  blockquote {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    line-height: 1.3;
    padding: 1em;
    p {
      font-size: 1.4rem;
      margin: 0;
      display: inline;
    }
    p:before {
      font-size: 5rem;
      color: ${theme.dark.lighten(1.5)};
      line-height: 0.3rem;
      vertical-align: -0.4em;
    }
  }
  @media (max-width: 600px) {
    blockquote {
      padding: .2em;
    }
  }
  .headline {
    font-size: 24px;
  }
`;

export default ({ title, date, tags, body, slug }: Post) =>
  <Article itemScope itemType="http://schema.org/BlogPosting" className="post">
    <header>
      <h1 itemProp="headline">
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
      <div>
        <span>
          <time itemProp="datePublished" dateTime={date}>
            {distanceInWordsToNow(date, { addSuffix: true })}
          </time>
        </span>
      </div>
    </header>
    <div dangerouslySetInnerHTML={{ __html: renderMarkup(body) }} />
    <ShareButton title={title} slug={slug} />
  </Article>;
