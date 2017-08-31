// @flow

import React from 'react';
import Layout from '../src/components/Layout';
import posts from '../posts';
import Card from '../src/components/Card/index';

export default Layout(
  () =>
    <div>
      <h2 style={{ textAlign: 'center' }}>Lookings for free....</h2>
      {posts.map(post => <Card {...post} />)}
    </div>,
  'Home'
);
