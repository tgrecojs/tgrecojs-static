// @flow

import React from 'react';
import Layout from '../src/components/Layout';
import posts from '../posts';
import Card from '../src/components/Card/index';

export default Layout(
  () =>
    <div>
      {posts.map(post => <Card key={post.slug} {...post} />)}
    </div>,
  'Home'
);
