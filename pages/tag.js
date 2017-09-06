// @flow

import React from 'react';
import Card from '../src/components/Card/index';
import posts from '../posts';
import { type Request } from '../types/request';
import Layout from '../src/components/Layout';

export default Layout(
  ({ url: { query: { tag } } }: Request) =>
    <div>
      <h2 style={{textAlign: 'center', color: 'white'}}>
        Current Tag: {tag}
      </h2>
      {posts
        .filter(post => post.tags && post.tags.includes(tag))
        .map(post => <Card {...post} />)}
    </div>,
  'Tag'
);
