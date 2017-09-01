import React from 'react';
import Link from 'next/link';
import styled from 'styled-components';
import { type Post } from '../../../types/post';

// import theme from '../../lib/theme';
const Anchor = styled.a`
  color: #000;
  font-family: 'Lato';
`;

const PostCard = styled.div`
  background: rgb(86, 156, 183);
  padding: 1em;
  color: #000;
  font-family: 'Inconsolata';
  border: 1px solid white;
  border-radius: 10px;
  margin: 1.5em;
  text-align: center;
  line-height: 1.5;
  display: flex;
  flex-direction: column;
  align-items: center;
  p {
    width: 80%;
    text-align: left;
  }
}
`;

const Btn = styled.button`
  height: 50px;
  width: 20%;
  font-size: 1.15em;
  border: 2px solid #fff;
  border-radius: 5px;
  transition: all .3s ease-in;
  background: rgb(147, 205, 227);
  margin: 15px;
  &:hover {
    background: #49768c;
  }
`;

export default ({ title, description, slug, tags }: Post = {}) =>
  <PostCard>
    <h1 itemProp="headline" className="post--title">
      {title}
    </h1>
    <p>
      {description}
    </p>
    <Link href={`/post?post=${slug}`} as={`/post/${slug}`}>
      <Btn>
        {' '}<Anchor>Read Post</Anchor>
      </Btn>
    </Link>
    <footer>
      <small className="post--tags">
        <span>Filed under: </span>
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
    </footer>
  </PostCard>;
